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
    models.ResponsiblePerson.belongsTo(models.Address, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    // Responsible Person has one Address
    models.ResponsiblePerson.belongsTo(models.ExtraOptions, {
      onDelete: "CASCADE"
    });
    // Responsible Person has one Extra Options
    models.ResponsiblePerson.hasMany(models.Document);
    // Responsible Person has many Documents
  };
  return ResponsiblePerson;
};