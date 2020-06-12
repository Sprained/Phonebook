const Sequelize = require('sequelize');
const { Model } = Sequelize;

class Phonebook extends Model{
    static init(sequelize){
        super.init({
            id_phonebook: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            phone: {
                type: Sequelize.BIGINT,
                unique: true
            },
            name: Sequelize.STRING
        }, {
            sequelize,
            tableName: 'phonebook'
        });

        return this;
    }

    static associate(models){
        this.belongsTo(models.Users, { foreignKey: 'users_id', as: 'users' });
    }
}

module.exports = Phonebook;