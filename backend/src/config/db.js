const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('rival_trading', 'singosari', '#00001_singosari@', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false // agar terminal tidak penuh dengan log SQL
});

module.exports = sequelize;
