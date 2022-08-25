'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Workspace extends Model {
    static associate(models) {
    }
  }
  Workspace.init({
    title: {
		type: DataTypes.STRING,
		validate: {
			notEmpty: true,
			notNull: true
		}
	 },
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Workspace',
  });
  return Workspace;
};