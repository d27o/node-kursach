'use strict';
module.exports = (sequelize, DataTypes) => {
  const Protocol = sequelize.define('Protocol', {
    date: DataTypes.DATE,
    time: DataTypes.TIME
  }, {});
  Protocol.associate = function(models) {
    // associations can be defined here
    models.Protocol.toBelong(models.Place, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Protocol;
};