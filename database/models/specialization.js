'use strict';
module.exports = (sequelize, DataTypes) => {
  const Specialization = sequelize.define('Specialization', {
    name: DataTypes.STRING
  }, {});
  Specialization.associate = function(models) {
    // associations can be defined here
    models.Specialization.hasMany(models.ExtraOptions)
  };
  return Specialization;
};