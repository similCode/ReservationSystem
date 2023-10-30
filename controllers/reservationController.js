const Reservation = require('../models/Reservation');
const Restaurant = require('../models/Restaurant')
const User = require('../models/User');
const asyncHandler = require("express-async-handler");
const hours = require('../helpers/hours')
const Ajv = require('ajv')
const addFormats = require("ajv-formats")
const getCurrentDate = require('../helpers/currentDate')
const reservationSchema = require("../validations/reservationValidation");

const ajv = new Ajv();
addFormats(ajv)

exports.createReservationGet = asyncHandler(async (req,res)=>{
    const restaurantToBook =  await Restaurant.findOne({
        where: {
            id : req.params.id
        }
    })
    const user = await User.findOne({
        where: {
            id: req.session.user
        }
    })
    const name = restaurantToBook.name
    res.render('reservation_create',{
        title: name,
        id: req.params.id,
        hours: hours,
        date: getCurrentDate()
    })
})

exports.createReservation = asyncHandler(async (req,res)=>{
    const people = req.body.people
    req.body.people = Number(people)

    console.log(req.body)

    const isDataValid = ajv.validate(reservationSchema, req.body);
    if(isDataValid) {
        const isAvailable = await availability(req.params.id, req.body.time, req.body.date);
        if(isAvailable) {
            console.log('im in')
            await Reservation.create({
                date: req.body.date,
                time: req.body.time,
                people: req.body.people,
                userId: req.session.user,
                restaurantId: req.params.id
            })
            res.redirect('/')

        } else {
            console.log('yes')
            res.send('error')
        }
    }
    else{
        res.send('error')
    }

})
async function availability(restaurantId,time,date){
    const reservationsAmount = await Reservation.count({
        where:{
            restaurantId: restaurantId,
            date: date,
            time: time,
        }
    })
    const restaurantToBook = await Restaurant.findByPk(restaurantId);
    return restaurantToBook.tableAmount > reservationsAmount;
}