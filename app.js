const express = require("express");
const ejs = require("ejs");
const path = require("path");

const server = express();
server.set("view engine", "ejs");

server.use(express.static("public"));

server.listen(process.env.PORT || 3000, (req, res) => {
    console.log("SERVER IS RUNNING ON PORT 3000");
});