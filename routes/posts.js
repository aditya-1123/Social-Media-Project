const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const Post = require('../models/posts');

router.post('/posts',
  [auth, [check('title', 'Title is required').not().isEmpty(), check('description', 'Description is required').not().isEmpty()]],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ message: 'Invalid inputs'});
    }
   
    try {
      // Create a new post
      const post = new Post({
        title: req.body.title,
        description: req.body.description,
        author: req.user.id
      });

      // Save the post to the database
      await post.save();

      // Return the new post object
      res.json({
        id: post.id,
        title: post.title,
        description: post.description,
        createdAt: post.createdAt
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// DELETE a post by ID
router.delete('/posts/:id', auth, async (req, res) => {
    try {
        // Find the post by ID
        const post = await Post.findById(req.params.id);
    
        if (!post) {
          return res.status(404).json({ message: 'Post not found' });
        }
    
        // Check if the authenticated user is the owner of the post
        if (post.author.toString() !== req.user.id) {
          return res.status(403).json({ message: 'You cannot delete someone else\'s post' });
        }
    
        // Delete the post if the user is the owner
        await post.deleteOne();
    
        res.status(200).json({ message: 'Post deleted successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
  });

module.exports = router;