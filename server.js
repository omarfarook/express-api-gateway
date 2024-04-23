const express = require('express');
const bodyParser = require('body-parser');
const resourceRoutes = require('./routes/resourceRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');
const logger = require('./utils/logger');

const server = express();

server.use(bodyParser.json());

server.use('/api/resource', resourceRoutes);

server.use(errorMiddleware);

// Start the server
const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'test') {
    server.listen(PORT, () => {
        logger.info(`Server is running on port ${PORT}`);
    });
}

module.exports = server;