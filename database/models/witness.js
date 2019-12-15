'use strict';
module.exports = (sequelize, DataTypes) => {
  const Witness = sequelize.define('Witness', {
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    patronymic: DataTypes.STRING,
    serialNumber: DataTypes.INTEGER
  }, {});
  Witness.associate = function(models) {
    // associations can be defined here
    Witness.associate = function(models) {
      Witness.belongsToMany(models.Protocol, {
        through: 'ProtocolWitness',
        foreignKey: 'witnessId'
      });
    };
  };
  return Witness;
};