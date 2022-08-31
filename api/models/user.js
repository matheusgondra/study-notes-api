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
		allowNull: false,
		validate: {
			notEmpty: {
				msg: "O campo username não deve ser vazio"
			}
		}
	 },
    password: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
			len: {
				args: [6, 20],
				msg: "A senha deve ter entre 6 e 20 caracteres"
			}
		}
	 }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};