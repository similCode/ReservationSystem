const {DataTypes} = require('sequelize');
const sequelize = require('../util/database');


const Table = sequelize.define('tables',{
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tableNumber: {
        type: DataTypes.INTEGER
    }
});




module.exports = Table


//TODO  agregar la funcionalidad de mesas ocupadas
//TODO agregar mapa de mesas
//TODO