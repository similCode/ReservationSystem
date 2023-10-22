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
        type: DataTypes.DATEONLY,
        allowNull: false
        //TODO validar que sea una fecha despues del dia de hoy con isAfter: "2011-11-05"
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    people:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    states: {
        type: DataTypes.ENUM,
        values: [ 'pending', 'confirm', 'cancelled'],
        allowNull: false,
        defaultValue: 'pending'
    }

})



module.exports = Reservation