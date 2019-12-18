'use strict';
module.exports = (sequelize, DataTypes) => {
  const CriminalCaseMaterialEvidence = sequelize.define('CriminalCaseMaterialEvidence', {
    criminalCaseId: DataTypes.INTEGER,
    materialEvidenceId: DataTypes.INTEGER
  }, {});
  CriminalCaseMaterialEvidence.associate = function(models) {
    // associations can be defined here
  };
  return CriminalCaseMaterialEvidence;
};