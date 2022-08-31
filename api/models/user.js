'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
		User.hasMany(models.Workspace, {
			foreignKey: "user_id"
		});
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
		}
	 }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};