'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
    }
  }
  User.init({
    username: {
		type: DataTypes.STRING,
		validate: {
			isEmail: true,
			notNull: true,
			notEmpty: true
		}
	 },
    password: {
		type: DataTypes.STRING,
		validate: {
			notEmpty: true,
			notNull: true,
			min: 6,
			max: 20
		}
	 }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};