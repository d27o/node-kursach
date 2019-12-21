"use strict";
module.exports = (sequelize, DataTypes) => {
  const Witness = sequelize.define(
    "Witness",
    {
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      patronymic: DataTypes.STRING,
      serialNumber: DataTypes.INTEGER
    },
    {}
  );
  Witness.associate = function(models) {
    // witness belongns to many to protocol

    Witness.belongsToMany(models.Protocol, {
      through: "ProtocolWitness",
      foreignKey: "witnessId"
    });

    // witness to belong adress
    models.Witness.belongsTo(models.Address, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Witness;
};
