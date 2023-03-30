const express = require("express")
const morgan = require("morgan")
const usersRouter = require('./routes/usersRouter')
const postsRouter = require('./routes/postsRouter')
/* const {User, Post} = require("./db") */

const server = express()

server.use(express.json())
server.use(morgan("dev"))

server.use('/users', usersRouter)
server.use('/posts', postsRouter)

module.exports = server

