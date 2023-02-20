const express = require("express");
//front end will have errors if cors is not imported
const cors = require("cors");
const helmet = require("helmet");
const server = express();

const TransactionsRouter = require("../api/transaction-router");

// this tells our app to accept json objects
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/transactions", TransactionsRouter);

module.exports = server;
