'use strict';
module.exports = (sequelize, DataTypes) => {
  const Extradition = sequelize.define('Extradition', {
    integrityMark: DataTypes.STRING,
    note: DataTypes.STRING,
    dateOfExtradition: DataTypes.DATE
  }, {});
  Extradition.associate = function(models) {
    // associations can be defined here
    models.Extradition.belongsTo(models.Document, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    // One Extradition has one Document
    models.Extradition.belongsTo(models.ResponsiblePerson, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    // One Extradition has One Responsible Person
    models.Extradition.belongsTo(models.Registration, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    // One Extradition has One Registration
  };
  return Extradition;
};