//express
const express = require('express');
const server = express();
// server middleware
server.use(express.json());
const cors = require('cors');
server.use(cors());
const logger = require('./middleware/logger-middleware');
server.use(logger);
// routers
const userRouter = require('./users/userRouter');

server.use('/api/users', userRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
