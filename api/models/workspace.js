'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Workspace extends Model {
    static associate(models) {
		Workspace.belongsTo(models.User, {
			foreignKey: "user_id"
		});
    }
  }
  Workspace.init({
    title: {
		type: DataTypes.STRING,
		validate: {
			notEmpty: true,
		}
	 },
    content: DataTypes.STRING(4000)
  }, {
    sequelize,
    modelName: 'Workspace',
  });
  return Workspace;
};