const { DataTypes } = require("sequelize")

const UserModel = (database) => {
    database.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
        },
        age: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: false
    })
}

module.exports = UserModel