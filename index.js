const express = require("express");

const server = express();

server.get("/", (req, res) => {
    res.send("API up and running")
})

server.listen(4000, () => {
    console.log("API UP AND RUNNING")
})

