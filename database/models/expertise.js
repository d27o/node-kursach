'use strict';
module.exports = (sequelize, DataTypes) => {
  const Expertise = sequelize.define('Expertise', {
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    conclusion: DataTypes.STRING,
    responsiblePersonId: DataTypes.INTEGER,
    criminalCaseId: DataTypes.INTEGER,
    materialEvidenceId: DataTypes.INTEGER
  }, {});
  Expertise.associate = function(models) {
    // associations can be defined here
    models.Expertise.belongsTo(models.MaterialEvidence, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    // One Expertise belong to One Material Evidence
    models.Expertise.belongsTo(models.ResponsiblePerson, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    // One Expertise belongs to One Responsible Person
    models.Expertise.belongsTo(models.CriminalCase, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    // One Expertise belongs to One Criminal Case
  };
  return Expertise;
};