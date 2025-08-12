const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  name: { type: Sequelize.STRING, allowNull: false },
  idade: { type: Sequelize.INTEGER, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false }
});

module.exports = User;