# Users API Documentation

Welcome to my portfolio API documentation.

This document provides information about the available endpoints and their usage.

## Table of Contents

- [Users](#users-api)
  - [Get All Users](#get-all-users)
  - [Get User by ID](#get-user-by-id)
  - [Add New User](#add-new-user)
  - [Update User by ID](#update-user-by-id)
  - [Delete User by ID](#delete-user-by-id)

## Users API

This is the API for working with local mock-data.

### Get All Users

#### Endpoint

``
GET /users/
``

Returns an array of all users.

#### Parameters
- None

#### Response
- Status Code: 200 OK
- Body: Array of user objects

### Get User by ID

#### Endpoint

``
GET /users/:id
``

Returns a specific user based on the provided ID.

#### Parameters
- `id` (query parameter) - The ID of the user to retrieve.

#### Response
- Status Code: 200 OK (if user is found)
- Status Code: 404 Not Found (if user is not found)
- Body: User object

### Add New User

#### Endpoint

``
POST /users/
``

Adds a new user with a unique ID.

#### Parameters
- `name` (string, required) - The name of the new user.
- `age` (number, required) - The age of the new user.

#### Response
- Status Code: 201 Created
- Body: Newly created user object

### Update User by ID

#### Endpoint

``
PATCH /users/:id
``

Updates a specific user based on the provided ID.

#### Parameters
- `id` (query parameter) - The ID of the user to update.
- `name` (string, optional) - The updated name of the user.
- `age` (number, optional) - The updated age of the user.

#### Response
- Status Code: 200 OK (if user is updated)
- Status Code: 404 Not Found (if user is not found or no update parameters are provided)
- Body: Updated user object

### Delete User by ID

#### Endpoint

``
DELETE /users/:id
``

Removes a specific user based on the provided ID.

#### Parameters
- `id` (query parameter) - The ID of the user to delete.

#### Response
- Status Code: 204 No Content (if user is deleted successfully)
- Status Code: 404 Not Found (if user is not found)
- No response body
