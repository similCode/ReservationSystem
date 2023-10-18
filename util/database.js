const Sequelize = require('sequelize');

const PG_DB = 'reservation_system_orm'
const PG_USER ='Leo'
const PG_PASSWORD='0880'
const PG_PORT="5432";

const sequelize = new Sequelize(PG_DB, PG_USER, PG_PASSWORD,{
            host: "localhost",
            PG_PORT,
            dialect: 'postgres',
            define: { freezeTableName: true }
        },
);


module.exports = sequelize;


