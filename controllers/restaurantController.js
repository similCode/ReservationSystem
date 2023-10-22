const Restaurant = require('../models/Restaurant')
const asyncHandler = require("express-async-handler");

exports.createRestaurant = asyncHandler(async (req, res) => {
    const newRestaurant = await Restaurant.create({
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        telephone: req.body.telephone,
        website: req.body.website
    })
    res.redirect('/')
})

exports.showRestaurants = asyncHandler(async (req,res)=>{
    const allRestaurants = await Restaurant.findAll()
    res.render('restaurants_list', {
        allRestaurants: allRestaurants,
    })
})