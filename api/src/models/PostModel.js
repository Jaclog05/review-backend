const { DataTypes } = require("sequelize")

const PostModel = (database) => {
    database.define('Post', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
        }
    }, {
        timestamps: false
    })
}

module.exports = PostModel