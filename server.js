const express = require('express')


const userRouter = require("./queries/queriesRouter")

const server = express();

server.use(express.json())


server.get('/', (req, res) => {
    res.send(
        `<h1>working</h1>`
    )
})

//Routes

 server.use('/asd', userRouter)


module.exports = server;
