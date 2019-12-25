'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Expertises', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      conclusion: {
        type: Sequelize.STRING
      },
      ResponsiblePersonId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        allowNull: false,
        references: {
          model: "ResponsiblePeople",
          key: 'id'
        }
      },
      CriminalCaseId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        allowNull: false,
        references: {
          model: "CriminalCases",
          key: 'id'
        }
      },
      MaterialEvidenceId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        allowNull: false,
        references: {
          model: "MaterialEvidences",
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Expertises');
  }
};