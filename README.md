# Social-Media-Project

This is a backend application for a social media platform where users can register, authenticate, create posts, and manage their own content securely, ensuring users can only interact with their own posts.

## Features

#### 1. User Registration:
- Users can register with their name, Gmail, and password.
#### 2. User Authentication:
- Users can log in using their Gmail and password to authenticate themselves.
#### 3. Create Posts:
- Authenticated users can create new posts.
#### 4. Delete Posts:
- Users can delete only their own posts; they cannot delete posts created by others.
#### 5. Secure Access:
- Creating and deleting posts requires user authentication to ensure security.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JSON Web Tokens (JWT) for authentication

## Installation
#### Clone the repository to your local machine:

1. Clone the repository:

   ```bash
   git clone https://github.com/aditya-1123/Social-Media-Project.git

2. After cloning, install the necessary dependencies:

    ```bash
    cd social_media  
    npm install

## API Endpoints

- `POST /register`: Register a new user.
- `POST /authenticate`: Authenticate a user and generate a JWT.
- `GET /user`: Get user details (protected by JWT).
- `POST /posts`: Create a new post (protected by JWT).
- `DELETE /posts/:id`: Delete a specific post by ID (protected by JWT).
