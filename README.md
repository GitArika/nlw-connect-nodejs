# NLW Connect

NLW Connect is a Node.js application built with Fastify, providing a robust and
scalable server for managing event subscriptions.

## Features

- Fastify for high-performance HTTP server
- Zod for schema validation
- Swagger for API documentation
- CORS support

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/nlw-connect.git
   cd nlw-connect/nodejs
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

## Configuration

Create a `.env` file in the root directory and add the following environment
variables:

    ```env
    PORT=3000
    ```

## Running the Server

Start the server with the following command:

    ```sh
    npm run dev
    # or
    yarn dev
    ```

The server will be running at `http://localhost:3000`.

## API Documentation

Access the API documentation at `http://localhost:3000/docs`.

## Routes

- `POST /subscribe`: Subscribe to an event

## License

This project is licensed under the MIT License.
