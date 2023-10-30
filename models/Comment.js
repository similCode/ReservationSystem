const {DataTypes} = require('sequelize');
const sequelize = require('../util/database');

const Comment = sequelize.define('comments',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    classification: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Comment