'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'phonebook',
      'created_at',
      {
        type: Sequelize.DATE,
        allowNull: false
      }
    )
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('phonebook', 'created_at')
  }
};
