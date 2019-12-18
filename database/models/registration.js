'use strict';
module.exports = (sequelize, DataTypes) => {
  const Registration = sequelize.define('Registration', {
    acceptDate: DataTypes.DATE,
    integrityMark: DataTypes.STRING,
    note: DataTypes.STRING
  }, {});
  Registration.associate = function(models) {
    // associations can be defined here
    models.Registration.hasOne(models.Extradition);
    // One Registration has One Extradition
    models.Registration.belongsTo(models.ResponsiblePerson, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    // One Registration has One Responsible Person
    models.Registration.belongsTo(models.MaterialEvidence, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    // One Registration has One Material Evidence
  };
  return Registration;
};