const {DataTypes, DATE} = require('sequelize');
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
        allowNull: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
    classification: {
        type: DataTypes.ENUM('1','2','3','4','5'),
        allowNull: true
    }
})

module.exports = Comment