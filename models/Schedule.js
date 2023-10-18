const {DataTypes} = require("sequelize")
const sequelize = require('../util/database');


const Schedule = sequelize.define("schedule", {
    startDay:{},
    finishDay:{},
    startHour:{},
    finishHour:{}
})

module.exports = Schedule







//TODO si yo quiero reservar en un dia que el restaurant no trabaja tengo que ser capaz de decir que la fecha no es valida
