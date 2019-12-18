'use strict';
module.exports = (sequelize, DataTypes) => {
  const CriminalCase = sequelize.define('CriminalCase', {
    numberOfCriminalCase: DataTypes.STRING
  }, {});
  CriminalCase.associate = function(models) {
    // associations can be defined here
    models.CriminalCase.hasMany(models.Expertise);
    // One Criminal Case has Many Expertises
    models.CriminalCase.belongsToMany(models.MaterialEvidence, {
      through: "CriminalCaseMaterialEvidence",
      foreignKey: "criminalCaseId"
    });
    // Many Criminal Cases belongs to Many Material Evidences
  };
  return CriminalCase;
};