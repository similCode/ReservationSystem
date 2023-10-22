const Comment = require('./Comment')
const Reservation = require('./Reservation')

const Restaurant = require("./Restaurant")
const User = require("./User")

//Users
User.hasMany(Reservation);
Reservation.belongsTo(User);
User.hasMany(Comment)
Comment.belongsTo(User)
//Restaurants
Restaurant.hasMany(Reservation, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Reservation.belongsTo(Restaurant, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Restaurant.hasMany(Comment)
Comment.belongsTo(Restaurant)
//