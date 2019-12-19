'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    street: DataTypes.STRING,
    home: DataTypes.STRING,
    flat: DataTypes.STRING
  }, {});
  Address.associate = function(models) {
    // associations can be defined here
    models.Address.belongsTo(models.City, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    // Address has one city

    models.Address.hasOne(models.ResponsiblePerson);
    // Responsible Person has one Address

    // adress has one witness
    models.Address.hasOne(models.Witness);
  };
  return Address;
};