'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProtocolWitness = sequelize.define('ProtocolWitness', {
    ProtocolId: DataTypes.INTEGER,
    WitnessId: DataTypes.INTEGER
  }, {});
  ProtocolWitness.associate = function(models) {
    // associations can be defined here
  };
  return ProtocolWitness;
};