const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Asset = sequelize.define('Asset', {
    name: { type: DataTypes.STRING, allowNull: false },
    symbol: { type: DataTypes.STRING, unique: true },
    price: { type: DataTypes.FLOAT, defaultValue: 0 },
    category: { type: DataTypes.ENUM('saham', 'kripto', 'obligasi') }
});

module.exports = Asset;
