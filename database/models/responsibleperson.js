'use strict';
module.exports = (sequelize, DataTypes) => {
  const ResponsiblePerson = sequelize.define('ResponsiblePerson', {
    name: DataTypes.STRING,
    middleName: DataTypes.STRING,
    secondName: DataTypes.STRING
  }, {});
  ResponsiblePerson.associate = function(models) {
    // associations can be defined here
    models.ResponsiblePerson.belongsTo(models.Position,{
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    // Responsible Person has one Position
    models.ResponsiblePerson.belongsTo(models.Address, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    // Responsible Person has one Address
    models.ResponsiblePerson.belongsTo(models.ExtraOptions, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    // Responsible Person has one Extra Options
    models.ResponsiblePerson.hasMany(models.Document);
    // Responsible Person has many Documents
    models.ResponsiblePerson.hasMany(models.Extradition);
    // Responsible Person has many Extradition
    models.ResponsiblePerson.hasMany(models.Registration);
    // Responsible Person has many Registrations
    models.ResponsiblePerson.hasMany(models.Expertise);
    // Responsible Person has many Registrations
  };
  return ResponsiblePerson;
};