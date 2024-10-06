# Authentication Project

This project is a complete solution for user authentication consisting of two parts: **server** and **client**.

## Overview

The project implements registration, logging into the system, as well as user profile management. The server part is implemented on **NestJS** using **PostgreSQL**, and the client part is built on **React** using **Tailwind CSS** for styling.

## Structure of the Project

- **Server Part**: Located in the `server` folder. This part is responsible for processing requests, authentication and interaction with the database.
- **Client Part**: Located in `client` folder. This part is responsible for displaying the user interface and interacting with the server through the API.

## How to start

### Server Part

To learn more about the server side, go to the documentation in the `server` folder:

```bash
cd server
```

### Client Part
To learn more about the client side, go to the documentation in the client folder:

```bash
cd client
```

### Requirements
- Node.js (version 14 or higher)
- npm (version 6 or higher)

## Routing API

Here is a list of the available routes of your API:

### Auth Routes

- **POST** `/auth/sign-up`
 - **Description**: New user registration.
 - **Request body**:
 ```json
 {
 "username": "string",
 "email": "string",
 "password": "string"
 }
 ```

- **POST** `/auth/sign-in`
 - **Description**: Login.
 - **Request body**:
 ```json
 {
 "username": "string",
 "password": "string"
 }
 ```

- **GET** `/auth/user`
 - **Description**: Get information about the current user (requires a token).

### Users Routes

- **GET** `/users/:id`
 - **Description**: Get user information by ID.

## Contact

- tg: https://t.me/vlad54703
- mail: vlad.kovalov2000@gmai.com
- linkedin: https://www.linkedin.com/in/vlad-kovalyov/
