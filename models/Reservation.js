const sequelize = require('../util/database');
const {DataTypes} = require("sequelize");


const Reservation = sequelize.define("reservations", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    state: {
        type: DataTypes.ENUM('Confirm', 'On Progress', 'Cancelled'),
        allowNull: false
    }
})



module.exports = Reservation