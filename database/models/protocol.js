"use strict";
module.exports = (sequelize, DataTypes) => {
  const Protocol = sequelize.define(
    "Protocol",
    {
      date: DataTypes.DATE,
      time: DataTypes.TIME
    },
    {}
  );
  Protocol.associate = function(models) {
    // belogns to one place
    models.Protocol.belongsTo(models.Place, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: false
      }
    });

    // protocol belongns to many to witness
    Protocol.belongsToMany(models.Witness, {
      through: "ProtocolWitness",
      foreignKey: "protocolId"
    });
  };

  return Protocol;
};
