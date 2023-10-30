const Comment = require('../models/Comment')
const Restaurant = require('../models/Restaurant')
const asyncHandler = require("express-async-handler");
const Ajv = require('ajv')
const addFormats = require("ajv-formats")
const commentSchema = require('../validations/commentValidation')
const getCurrentDate = require('../helpers/currentDate')

const ajv = new Ajv();
addFormats(ajv)

exports.createCommentGet = asyncHandler(async (req, res)=>{
    const restaurant = await Restaurant.findByPk(req.params.id)
    res.render('comment_create',{
        name: restaurant.name,
        id: req.params.id
    })
})
exports.createComment = asyncHandler(async (req, res)=>{
    req.body.date = getCurrentDate()
    const isDataValid = ajv.validate(commentSchema, req.body);
    if (isDataValid) {
        await Comment.create({
            comment: req.body.comment,
            classification: (req.body.classification),
            date: getCurrentDate(),
            userId: req.session.user,
            restaurantId: req.params.id
        })
        res.redirect('/')
    }
    else {
        console.error(ajv.errors);
        res.send(ajv.errors)
    }


})