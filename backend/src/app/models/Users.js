const Sequelize = require('sequelize');
const { Model } = Sequelize;
const bcrypt = require('bcryptjs');

class Users extends Model{
    static init(sequelize){
        super.init({
            id_users: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.VIRTUAL,
            password_hash: Sequelize.STRING,
        }, {
            sequelize,
        });

        this.addHook('beforeSave', async (users) => {
            if(users.password){
                users.password_hash = await bcrypt.hash(users.password, 8);
            }
        });

        return this;
    }

    checkPass(password){
        return bcrypt.compare(password, this.password_hash);
    }
}

module.exports = Users;