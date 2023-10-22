const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const Restaurant = require("../models/Restaurant");
const Reservation = require("../models/Reservation");
const Comment = require("../models/Comment");

exports.mainApp = asyncHandler( async (req, res)=>{

    const [
        user_count,
        restaurant_count,
        reservation_count,
        comment_count,
    ] = await Promise.all([
        User.count(),
        Restaurant.count(),
        Reservation.count(),
        Comment.count()
    ]);
    if(!req.session.user) {
        res.render('index', {
            title: 'Este es mi sistema de reservaciones',
            user_count: user_count,
            restaurant_count: restaurant_count,
            reservation_count: reservation_count,
            comment_count: comment_count,
        })
    }
    else{
        res.render('indexWithAuth', {
            title: 'Este es mi sistema de reservaciones',
            user_count: user_count,
            restaurant_count: restaurant_count,
            reservation_count: reservation_count,
            comment_count: comment_count,
        })
    }

})