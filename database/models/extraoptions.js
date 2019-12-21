'use strict';
module.exports = (sequelize, DataTypes) => {
  const ExtraOptions = sequelize.define('ExtraOptions', {
    experience: DataTypes.STRING
  }, {});
  ExtraOptions.associate = function(models) {
    // associations can be defined here
    models.ExtraOptions.belongsTo(models.Specialization, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    // Extra Options has one Specialization
    models.ExtraOptions.hasOne(models.ResponsiblePerson);
    // Extra Options has one Responsible Person
  };
  return ExtraOptions;
};