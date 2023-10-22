const Reservation = require('../models/Reservation');
const Restaurant = require('../models/Restaurant')
const User = require('../models/User');
const asyncHandler = require("express-async-handler");

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
    const name = restaurantToBook.name//TODO hacer esto mas bonito llamando a la propiedad de restaurante
    console.log(user)
    res.render('reservation_create',{
        title: name,
        id: req.params.id
    })
})

exports.createReservation = asyncHandler(async (req,res)=>{
    await Reservation.create({
        date: req.body.date,
        time: req.body.time,
        people: req.body.people,
        userId: req.session.user,
        restaurantId: req.params.id
    })
    res.redirect('/')
})