const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment')
const Reservation = require('../models/Reservation')
const Restaurant = require("../models/Restaurant")
const User = require("../models/User")
const commentController = require('../controllers/commentController');
const userController = require('../controllers/userController');
const reservationController = require('../controllers/reservationController');
const restaurantController = require('../controllers/restaurantController');
const requireAuth = require('../helpers/auth')
const mainPageController = require('../controllers/mainPageController')


//Main Page
router.get('/', mainPageController.mainApp);
//Autenticacion
router.get('/login',(req, res)=>{
  res.render('login')
});
router.post('/login',userController.loginUser)
router.get('/signup', (req, res) => {
  res.render('signup');
});
router.post('/signup', userController.createUser);
router.get('/exit', userController.closeSession)

//restaurant
router.get('/restaurant/create',(req, res)=>{
  res.render('restaurant_create')
});
router.post('/restaurant/create',restaurantController.createRestaurant)
router.get('/restaurants', restaurantController.showRestaurants)
//TODO mostrar info de un restaurant

//Reservacion
router.get('/booking', restaurantController.showRestaurants);
router.get('/booking/:id', requireAuth ,reservationController.createReservationGet)
router.post('/booking/:id', requireAuth, reservationController.createReservation);


//Comentarios
router.get('/comment/create/:id', requireAuth, commentController.createCommentGet)
router.post('/comment/create/:id', requireAuth, commentController.createComment)


module.exports = router;
