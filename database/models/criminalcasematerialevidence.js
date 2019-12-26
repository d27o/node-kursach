'use strict';
module.exports = (sequelize, DataTypes) => {
  const CriminalCaseMaterialEvidence = sequelize.define('CriminalCaseMaterialEvidence', {
    CriminalCaseId: DataTypes.INTEGER,
    MaterialEvidenceId: DataTypes.INTEGER
  }, {});
  CriminalCaseMaterialEvidence.associate = function(models) {
    // associations can be defined here
  };
  return CriminalCaseMaterialEvidence;
};