'use strict';
module.exports = (sequelize, DataTypes) => {
  const ResponsiblePerson = sequelize.define('ResponsiblePerson', {
    name: DataTypes.STRING,
    middleName: DataTypes.STRING,
    secondName: DataTypes.STRING
  }, {});
  ResponsiblePerson.associate = function(models) {
    // associations can be defined here
    models.ResponsiblePerson.toBelong(models.Position,{
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    // Responsible Person has one Position
    models.ResponsiblePerson.toBelong(models.Address, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: false
      }
    });
    // Responsible Person has one Address
    models.ResponsiblePerson.toBelong(models.ExtraOptions, {
      onDelete: "cascade"
    });
    // Responsible Person has one Extra Options
  };
  return ResponsiblePerson;
};