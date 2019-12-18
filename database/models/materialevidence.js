'use strict';
module.exports = (sequelize, DataTypes) => {
  const MaterialEvidence = sequelize.define('MaterialEvidence', {
    name: DataTypes.STRING,
    state: DataTypes.STRING
  }, {});
  MaterialEvidence.associate = function(models) {
    // associations can be defined here
    models.MaterialEvidence.belongsTo(models.TypeOfMaterialEvidence, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    // One Material Evidence has One Type of Material Evidence
    models.MaterialEvidence.hasMany(models.Registration);
    // One Material Evidence has Many Registrations
    models.MaterialEvidence.belongsTo(models.Protocol, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    // One Material Evidence has One Protocol
  };
  return MaterialEvidence;
};