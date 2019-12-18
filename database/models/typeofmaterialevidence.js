'use strict';
module.exports = (sequelize, DataTypes) => {
  const TypeOfMaterialEvidence = sequelize.define('TypeOfMaterialEvidence', {
    name: DataTypes.STRING
  }, {});
  TypeOfMaterialEvidence.associate = function(models) {
    // associations can be defined here
    models.TypeOfMaterialEvidence.hasMany(models.MaterialEvidence);
    // One Type of Material Evidence has Many Material Evidence
  };
  return TypeOfMaterialEvidence;
};