'use strict';
module.exports = (sequelize, DataTypes) => {
  const Position = sequelize.define('Position', {
    name: DataTypes.STRING
  }, {});
  Position.associate = function(models) {
    // associations can be defined here
    models.Position.hasMany(models.ResponsiblePerson);
    // Many Positions has One Responsible Person
  };
  return Position;
};