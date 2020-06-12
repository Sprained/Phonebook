'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'phonebook',
      'updated_at',
      {
        type: Sequelize.DATE,
        allowNull: false
      }
    )
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('phonebook', 'updated_at')
  }
};
