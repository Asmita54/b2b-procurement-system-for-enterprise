const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.ENUM('buyer', 'supplier', 'admin'),
    defaultValue: 'buyer',
  },
  provider: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: true,
});

sequelize.sync();
module.exports = User;
