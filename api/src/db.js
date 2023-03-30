const { Sequelize } = require("sequelize")
require('dotenv').config()
const PostModel = require("./models/PostModel")
const UserModel = require("./models/UserModel")

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env


const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
    logging: false
})

PostModel(database)
UserModel(database)

const {User, Post} = database.models

Post.belongsTo(User)
User.hasMany(Post)

module.exports = {
    database,
    ...database.models
}