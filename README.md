# Social-Media-Project

This is a backend application for a social media platform where users can register, authenticate, create posts, interact with others' posts, and manage their profiles. Admins can manage users and posts.

## Features

#### 1. User Sign Up and Login:
- Users can sign up and log in with their email and password.
#### 2. Post Management:
- Users can create, update, and delete their own posts.
- Users can like and comment on posts.
#### 3. Follow Users:
- Users can follow other users to see their posts on their feed.
#### 4. Admin Functionalities:
- Admins can manage users and posts (delete or suspend users).
#### 5. User Profile:
- Users can view and update their profile information, such as profile picture and bio.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JSON Web Tokens (JWT) for authentication

## Installation
#### Clone the repository to your local machine:

1. Clone the repository:

   ```bash
   git clone https://github.com/Prince-1501/voting_app.git

2. After cloning, install the necessary dependencies:

    ```bash
    cd social-media-app  
    npm install

## API Endpoints

- `POST /register`: Register a new user.
- `POST /authenticate`: Authenticate a user and generate a JWT.
- `GET /user`: Get user details (protected by JWT).
- `POST /posts`: Create a new post (protected by JWT).
- `DELETE /posts/:id`: Delete a specific post by ID (protected by JWT).
