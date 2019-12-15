'use strict';
module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define('Place', {
    insepctionDate: DataTypes.DATE,
    name: DataTypes.STRING,
    inspectionTime: DataTypes.TIME,
    description: DataTypes.STRING
  }, {});
  Place.associate = function(models) {
    // associations can be defined here
    models.Place.hasOne(models.Protocol);
  };
  return Place;
};