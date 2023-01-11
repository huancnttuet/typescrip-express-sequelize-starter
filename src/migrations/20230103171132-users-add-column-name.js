'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('users', 'name', Sequelize.STRING(45));
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('users', 'name');
  },
};
