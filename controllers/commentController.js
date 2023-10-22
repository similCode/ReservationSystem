const Comment = require('../models/Comment')
const Restaurant = require('../models/Restaurant')
const asyncHandler = require("express-async-handler");


exports.createCommentGet = asyncHandler(async (req, res, next)=>{
    const restaurant = await Restaurant.findByPk(req.params.id)
    res.render('comment_create',{
        name: restaurant.name,
        id: req.params.id
    })
})
exports.createComment = asyncHandler(async (req, res)=>{
    await Comment.create({
        comment: req.body.comment,
        classification: req.body.classification,
        userId: req.session.user,
        restaurantId: req.params.id
    })
    res.redirect('/')
})