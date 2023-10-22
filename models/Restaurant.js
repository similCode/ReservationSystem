const {DataTypes} = require('sequelize');
const sequelize = require('../util/database');

const Restaurant = sequelize.define('restaurants', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        get(){
            const restaurantName = this.getDataValue('name');
            return restaurantName
        }
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telephone: {
        type: DataTypes.STRING,
        isNumeric: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    website: {
        type: DataTypes.STRING,
        isUrl: true,
        allowNull: false
    },
    url: {
        type:DataTypes.VIRTUAL,
        get(){
            return `/restaurant/${this.id}`
        }
    }
});

module.exports = Restaurant
