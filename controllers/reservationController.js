const Reservation = require('../models/Reservation');
const Restaurant = require('../models/Restaurant')
const asyncHandler = require("express-async-handler");

exports.createReservationGet = asyncHandler(async (req,res)=>{
    const restaurantToBook =  await Restaurant.findById(req.body.id)
    res.render('')
})

exports.createReservation = asyncHandler(async (req,res)=>{

})