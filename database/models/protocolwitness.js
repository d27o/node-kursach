'use strict';
module.exports = (sequelize, DataTypes) => {
  const Protocolwitness = sequelize.define('Protocolwitness', {
    protocolId: DataTypes.INTEGER,
    witnessId: DataTypes.INTEGER
  }, {});
  Protocolwitness.associate = function(models) {
    // associations can be defined here
  };
  return Protocolwitness;
};