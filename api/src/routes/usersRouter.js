const { Router } = require("express")
const { User, Post } = require("../db")

const usersRouter = Router()

usersRouter.get('/', async (req, res) => {
    try {
        const users = await User.findAll({
            include: {
                    model: Post,
                    attributes: ['title', 'content']
                }
            }
        )
        res.status(200).json(users)
    } catch (error){
        res.status(400).send(error.message)
    }
})

usersRouter.post('/', async (req, res) => {
    try{
        const users = req.body
        const usersResponse = await User.bulkCreate(users)
        res.status(200).json(usersResponse)
    }catch(error){
        res.status(400).send(error.message)
    }
})

module.exports = usersRouter