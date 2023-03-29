const { Router } = require('express')
const { Post } = require("../db")

const postsRouter = Router()

postsRouter.get('/', async (req, res) => {
    try{
        const posts = await Post.findAll()
        res.status(200).json(posts)
    }catch(error){
        res.status(400).send(error.message)
    }
})

postsRouter.post('/', async (req, res) => {
    try{
        const {userId, title, content} = req.body
        if(!userId || !title || !content){
            throw new Error("Missing info")
        }else{
            const post = await Post.create({userId, title, content})
            return res.status(200).json(post)
        }
    }catch(error){
        res.status(400).send(error.message)
    }
})

module.exports = postsRouter