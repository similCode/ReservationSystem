const Restaurant = require('../models/Restaurant')
const asyncHandler = require("express-async-handler");

exports.createRestaurant = asyncHandler(async (req, res) => {
    const name = req.body.name;
    const address = req.body.address;
    const email = req.body.email;
    const telephone = req.body.telephone
    const website = req.body.website
    const newRestaurant = await Restaurant.build({
        name: name,
        address: address,
        email: email,
        telephone: telephone,
        website: website
    })
    await newRestaurant.save()
    res.redirect('/')
})

exports.showRestaurants = asyncHandler(async (req,res)=>{
    const allRestaurants = await Restaurant.findAll()
    res.render('restaurants_list', {
        allRestaurants: allRestaurants
    })
})