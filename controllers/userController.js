const express = require('express');
const User = require('../models/User');
const asyncHandler = require("express-async-handler");
const {encrypt, compare} = require('../helpers/passwordEncrypt')
const Ajv = require('ajv')
const addFormats = require("ajv-formats")
const userSchema = require('../validations/userValidation')

const ajv = new Ajv();
addFormats(ajv)

exports.createUser = asyncHandler(async (req, res)=>{

    const isDataValid = ajv.validate(userSchema, req.body);
    if(isDataValid) {
        const hashPassword = await encrypt(req.body.password)
        const newUser = await User.create({
            name: req.body.name,
            last_name: req.body.lastName,
            email: req.body.email,
            password: hashPassword
        })
        req.session.user = newUser.id
        res.redirect('/')
    }
    else{
        console.error(ajv.errors);
        res.send(ajv.errors)
    }
})

exports.loginUser = asyncHandler(async (req, res) => {
    const userToLogin = await User.findOne({ where: {email: req.body.email}});
    if(!userToLogin){
        res.status(404)
        res.send({error:'User not found'})
    }
    const checkPassword = await compare(req.body.password, userToLogin.password)

    if (userToLogin && checkPassword) {
        req.session.user = userToLogin.id;
        res.redirect('/');
    } else {
        res.status(409)
        res.send({error:'Wrong password'})
    }
});

exports.closeSession = asyncHandler(async (req, res)=>{
    req.session.user = null
    res.redirect('/')
})