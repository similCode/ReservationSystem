const Comment = require('./Comment')
const Reservation = require('./Reservation')
const Table = require("./Table")
const Restaurant = require("./Restaurant")
const User = require("./User")

//Users
User.hasMany(Reservation);
Reservation.belongsTo(User);
User.hasMany(Comment)
Comment.belongsTo(User)
//Restaurants
Restaurant.hasMany(Table, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Table.belongsTo(Restaurant,{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Restaurant.hasMany(Reservation, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Reservation.belongsTo(Restaurant, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
//Table
Table.hasMany(Reservation)
Reservation.belongsTo(Table)
//Reservations
Reservation.hasMany(Comment)
Comment.belongsTo(Reservation)
//