const express = require('express')

const server = express();

server.use(express.json())


server.get('/', (req, res) => {
    res.send(
        `<h1>working</h1>`
    )
})

//Routes
//  server.use('/', recipeRouter)


module.exports = server;
