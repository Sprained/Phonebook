'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'phonebook',
      'users_id',
      {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id_users' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      }
    );
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('phonebook', 'id_users')
  }
};
