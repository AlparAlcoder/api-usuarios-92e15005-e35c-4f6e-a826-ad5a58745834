# User API Documentation

This project is a user management API built on Express.js. It provides endpoints for CRUD operations (Create, Read, Update, and Delete) on user data, secured with JWT authentication.

## Routes

The API contains the following user routes:

- POST `/`: Create a user
- PUT `/:id`: Update a user
- DELETE `/:id`: Delete a user
- GET `/:id`: Get a user

Each route is secured with JWT authentication.

## Controllers

Four controller functions are defined in `src/controllers/userController.js`:

- `createUser`
- `updateUser`
- `deleteUser`
- `getUser`

Each function uses async/await to handle promises and try/catch for error handling.

## Services

The `src/services/userService.js` file contains the corresponding service functions. These functions interact with the UserRepository to perform the necessary database operations.

## Repositories

The UserRepository (`src/repositories/userRepository.js`) interacts with the UserModel to perform CRUD operations.

## Models

The model (`src/models/User.js`) defines the User schema.

## Middleware

The `auth` middleware (`src/middleware/auth.js`) is used to authenticate requests. It verifies the JWT provided in the `Authorization` header of the request.

## Config

Database configuration is loaded from environment variables using dotenv.

## App

The Express application is set up in `src/app.js`. The userRoutes are registered here and middleware for error handling is also set up.

## Parameters and Types

- `userData` : An object containing user data. It should include `name`, `idade`, `password`, and `email`.
- `id` : The id of the user. It should be a number.

## Examples

```javascript
// create user
POST /user
Content-Type: application/json
Authorization: Bearer <token>
{
  "name": "John Doe",
  "idade": 30,
  "password": "password",
  "email": "john.doe@example.com"
}

// update user
PUT /user/1
Content-Type: application/json
Authorization: Bearer <token>
{
  "name": "John Doe",
  "idade": 31
}

// get user
GET /user/1
Authorization: Bearer <token>

// delete user
DELETE /user/1
Authorization: Bearer <token>
```

## Important Notes

- All routes require a valid JWT in the `Authorization` header.
- User's password is hashed before stored in the database.

## Dependencies

- express
- sequelize
- bcryptjs
- jsonwebtoken
- dotenv
