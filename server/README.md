# NestJS Authentication API

This project is a backend API developed with **NestJS** using **PostgreSQL** for data storage, **TypeORM** for ORM, **JWT** for authentication, **DTO** and * *class-validator** for data validation, **Swagger** for automatic documentation generation, and **CORS** for handling cross-domain queries.

## Overview of the Project

This project provides functionality for user registration and authorization, user management, and API security using JWT. API documentation is generated automatically using Swagger and CORS is configured to control API access from different domains.

## Technologies

- **NestJS**: A framework for developing server applications on Node.js.
- **TypeORM**: ORM for TypeScript and JavaScript (ES7), supports Active Record and Data Mapper patterns.
- **PostgreSQL**: Powerful object-relational database management system.
- **JWT (JSON Web Tokens)**: A standardized method for the secure transfer of information between parties.
- **class-validator & class-transformer**: Libraries for object validation and transformation.
- **Swagger**: A tool for automatically generating interactive API documentation.
- **CORS**: A security mechanism that allows you to control which domains can interact with your API.

## Installation

```bash
cd server
npm install
```

## Launch of the Project
1. Starting the Server in Development Mode

```bash
npm run migration:run
npm run start:dev
```
2. Starting the Server in Production Mode

 ```bash
npm run migration:run
npm run build
npm run start:prod
 ```
 
## Settings
 Creating an .env file from an .env.example file

```bash
cp .env.example .env
```
## Migrations

```bash
npm run migration:create
npm run migration:generate <MigrationName>
npm run migration:run
npm run migration:revert
```
