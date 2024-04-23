# Node.js API Gateway

This is a simple API Gateway implemented in Node.js using Express.js. The API Gateway provides a centralized entry point for clients to access various resources and services in a microservices architecture.

## Table of Contents

- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

Clone the repository:

```
git clone https://github.com/omarfarook/express-api-gateway.git
```

```
cd express-api-gateway
npm install
```

## Project Structure

The project follows a modular structure for better organization and maintainability:

- `server.js`: This is the entry point for the application. It sets up the Express server and middleware.
- `routes/`: This directory contains route modules.
- `controllers/`: This directory contains controller modules for handling request logic.
- `middlewares/`: This directory contains middleware modules for request processing.
- `utils/`: This directory contains utility modules.
- `__test__/`: This directory contains test files.

Each of these components plays a specific role in the application.

## Usage

1. Start the server:

```
npm start
```

2. Access the API endpoints at http://localhost:3000/api/resource.

## Testing

The project includes unit tests and integration tests for controllers, routes, and middleware. To run the tests, use:

```
npm test
```

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License.