"use strict";
module.exports = (sequelize, DataTypes) => {
  const Protocol = sequelize.define(
    "Protocol",
    {
      name: DataTypes.STRING
    },
    {}
  );
  Protocol.associate = function(models) {
    // belogns to one place
    models.Protocol.belongsTo(models.Place, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });

    // protocol belongns to many to witness
    Protocol.belongsToMany(models.Witness, {
      through: "ProtocolWitness",
      foreignKey: "ProtocolId"
    });

  Protocol.hasMany(models.MaterialEvidence);
  // One Protocol has Many Materila Evidence
};

  return Protocol;
};
