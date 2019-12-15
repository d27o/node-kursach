'use strict';
module.exports = (sequelize, DataTypes) => {
  const Witness = sequelize.define('Witness', {
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    patronymic: DataTypes.STRING,
    serialNumber: DataTypes.INTEGER
  }, {});
  Witness.associate = function(models) {
    // witness belongns to many to protocol
    Witness.associate = function(models) {
      Witness.belongsToMany(models.Protocol, {
        through: 'ProtocolWitness',
        foreignKey: 'witnessId'
      });
    };
    Witness.associate = function(models) {
      // witness to belong adress
      models.Witness.belongsTo(models.Adress, {
        onDelete: "cascade",
        foreignKey: {
          allowNull: false
        }
      });
    };


  };
  return Witness;
};