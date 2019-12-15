'use strict';
module.exports = (sequelize, DataTypes) => {
  const TypeOfDocument = sequelize.define('TypeOfDocument', {
    name: DataTypes.STRING
  }, {});
  TypeOfDocument.associate = function(models) {
    // associations can be defined here
    models.TypeOfDocument.hasMany(models.Document);
    // Many Types of Documents has one Document
  };
  return TypeOfDocument;
};