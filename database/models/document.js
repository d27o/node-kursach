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
    models.Document.belongsTo(models.ResponsiblePerson, {
      onDelete: "CASCADE"
    });
    // One Document has One Responsible Person
    models.Document.hasOne(models.Extradition);
    // One Document has one Extradition

  };
  return Document;
};