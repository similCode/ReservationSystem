const express = require('express');
const router = express.Router();
const User = require('../models/User');
const asyncHandler = require("express-async-handler");

exports.createUser = asyncHandler(async (req, res,next)=>{
    console.log(req.body)
    const newUser = User.build({
        name: req.body.name,
        last_name: req.body.lastName,
        email: req.body.email
    })
    newUser.save()
    console.log(newUser)
    res.redirect('/')
})