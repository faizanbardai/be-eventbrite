const express = require("express");
const server = express();

require("dotenv").config();
const port = process.env.PORT;

const userRegRoute = require("./src/routes/user_reg");

server.use(express.json());
server.use("/userReg", userRegRoute);

server.listen(port, () => console.log(`Listening on port ${port}`));
