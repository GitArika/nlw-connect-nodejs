# NLW Connect

NLW Connect is a Node.js application built with Fastify, providing a robust and
scalable server for managing event subscriptions, invite friends and show the
referral ranking by clicks & scores.

## Features

- Fastify for high-performance HTTP server
- Zod for schema validation
- Swagger for API documentation
- CORS support
- PostgreSQL for user data storage
- Redis for referral ranking
- Docker support for containerization

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Docker

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
    DATABASE_URL=your_postgresql_database_url
    REDIS_URL=your_redis_url
    ```

## Running the Server

Start the server with the following command:

    ```sh
    npm run dev
    # or
    yarn dev
    ```

The server will be running at `http://localhost:3000`.

## Running with Docker

Build and run the Docker container with the following commands:

    ```sh
    docker build -t nlw-connect .
    docker run -p 3000:3000 --env-file .env nlw-connect
    ```

## API Documentation

Access the API documentation at `http://localhost:3000/docs`.

## Routes

- `GET /ranking`: Get subscribers ranking
- `GET /subscribers/:subscriberId/ranking/position`: Get subscriber position at
  ranking
- `GET /subscribers/:subscriberId/ranking/count`: Get subscriber referral score
- `GET /subscribers/:subscriberId/ranking/clicks`: Get subscriber referral
  clicks
- `GET /invites/:subscriberId`: Access an invite link
- `POST /subscriptions`: Create a new subscription

## License

This project is licensed under the MIT License.

## Infra

- PostgreSQL at Neon
- Redis at Upstash
- Server at Render

## Certified keyword

- futuro
