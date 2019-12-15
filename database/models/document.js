'use strict';
module.exports = (sequelize, DataTypes) => {
  const Document = sequelize.define('Document', {
    name: DataTypes.STRING
  }, {});
  Document.associate = function(models) {
    // associations can be defined here
    models.Document.belongsTo(models.TypeOfDocument, {
      onDelete: "CASCADE"
    });
    // One Document has one Type of Document
    models.Document.hasMany(models.ResponsiblePerson);
    // One Document has one Responsible Person
    models.Document.belongsTo(models.ResponsiblePerson, {
      onDelete: "CASCADE"
    });
    // One Document has One Responsible Person
  };
  return Document;
};