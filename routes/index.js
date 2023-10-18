const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment')
const Reservation = require('../models/Reservation')
const Table = require("../models/Table")
const Restaurant = require("../models/Restaurant")
const User = require("../models/User")
const commentController = require('../controllers/commentController');
const userController = require('../controllers/userController');
const reservationController = require('../controllers/reservationController');
const restaurantController = require('../controllers/restaurantController');
const tableController = require('../controllers/tableController');


/* GET home page. */
router.get('/', async function(req, res) {
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
  res.render('index', {
    title: 'Este es mi sistema de reservaciones',
    user_count: user_count,
    restaurant_count: restaurant_count,
    reservation_count: reservation_count,
    comment_count: comment_count,
  });
});
router.get('/user/create',(req, res)=>{
  res.render('user_create')
});
router.post('/user/create',userController.createUser)
router.get('/restaurant/create',(req, res)=>{
  res.render('restaurant_create')
});
router.post('/restaurant/create',restaurantController.createRestaurant)
router.get('/booking', restaurantController.showRestaurants);
router.get('/booking/restaurant/:id', reservationController.createReservationGet)
router.post('/booking/restaurant/:id', reservationController.createReservation);
router.get('/reservation/restaurant/:idr', function(req, res) {
  res.render('index', {
    title: 'Este es mi sistema de reservaciones',
    dialog: ""}
  );
});
router.get('/reservation/:id/restaurant/:idr', function(req, res) {
  res.render('index', {
    title: 'Este es mi sistema de reservaciones',
    dialog: ""}
  );
});
router.get('/reservation/user/:idu', function(req, res) {
  res.render('index', {
    title: 'Este es mi sistema de reservaciones',
    dialog: ""}
  );
});
router.get('/reservation/:id/user/:idu', function(req, res) {
  res.render('index', {
    title: 'Este es mi sistema de reservaciones',
    dialog: ""}
  );
});


module.exports = router;
