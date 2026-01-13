# User Management API

A RESTful API for managing users with authentication and authorization.

## Features

- User registration and authentication (JWT)
- CRUD operations for user management
- Role-based access control (user/admin)
- Secure password hashing with bcrypt
- Input validation
- Error handling

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd user-management-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following variables:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/user_management
   JWT_SECRET=your_jwt_secret_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

   For production:
   ```bash
   npm start
   ```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
  ```json
  {
    "username": "johndoe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

- `POST /api/auth/login` - Login user
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

- `GET /api/auth/user` - Get current user (requires authentication)

### Users (All require authentication)

- `GET /api/users` - Get all users (admin only)
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## Authentication

Include the JWT token in the `Authorization` header for authenticated routes:

```
Authorization: Bearer <your_jwt_token>
```

## Error Handling

All error responses follow this format:

```json
{
  "message": "Error message"
}
```

## License

ISC
