const express = require("express")
const morgan = require("morgan")
const {User, Post} = require("./db")

const server = express()

server.use(express.json())
server.use(morgan("dev"))

server.get('/users', async (req, res) => {
    try {
        const users = await User.findAll()
        res.status(200).json(users)
    } catch (error){
        res.status(400).send(error.message)
    }
})

server.post('/users', async (req, res) => {
    try{
        const users = req.body
        const usersResponse = await User.bulkCreate(users)
        res.status(200).json(usersResponse)
    }catch(error){
        res.status(400).send(error.message)
    }
})

module.exports = server

