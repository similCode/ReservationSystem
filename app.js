const express = require('express');
const path = require('path');
const logger = require('morgan');
const session = require(`express-session`);
//DB
const sequelize = require('./util/database');
//swagger UI
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

//locals
const indexRouter = require('./routes/index');
require('./models/Relations')


const app = express();
const port = process.env.PORT || '3000';
app.set('port', port);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'tu_secreto', // Debe ser una cadena aleatoria y segura
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Configura esto en true para HTTPS
}));

app.use('/', indexRouter);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))




async function databaseActivation(){
    try {
        await sequelize.sync({alter: true});
        app.listen(app.get('port'))
        console.log('server litening')
        console.log('Connection has been established successfully.');
    } catch(error) {
        console.error('Unable to connect to the database:', error);
    }
}
databaseActivation();
module.exports = app;
