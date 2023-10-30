const Restaurant = require('../models/Restaurant')
const asyncHandler = require("express-async-handler");
const Ajv = require('ajv')
const addFormats = require("ajv-formats")
const restaurantSchema = require('../validations/restaurantValidation')

const ajv = new Ajv();
addFormats(ajv)

exports.createRestaurant = asyncHandler(async (req, res) => {
    const tableAmount = req.body.tableAmount
    req.body.tableAmount = Number(tableAmount)
    console.log(req.body)
    const isDataValid = ajv.validate(restaurantSchema, req.body);
    if(isDataValid) {
        await Restaurant.create({
            name: req.body.name,
            address: req.body.address,
            email: req.body.email,
            telephone: req.body.telephone,
            website: req.body.website,
            tableAmount: req.body.tableAmount
        })
        res.redirect('/')
    }
    else{
        console.error("Errores", ajv.errors);
        res.send( ajv.errors)
    }
})

exports.showRestaurants = asyncHandler(async (req,res)=>{
    const allRestaurants = await Restaurant.findAll()
    res.render('restaurants_list', {
        allRestaurants: allRestaurants,
    })
})