'use strict';
module.exports = (sequelize, DataTypes) => {
  const ExtraOptions = sequelize.define('ExtraOptions', {
    experience: DataTypes.STRING
  }, {});
  ExtraOptions.associate = function(models) {
    // associations can be defined here
    models.ExtraOptions.belongsTo(models.Specialization, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return ExtraOptions;
};