const sequelize = require('sequelize');

const databaseConfig = require('../config/database');

const Users = require('../app/models/Users');
const Phonebook = require('../app/models/Phonebook');

const models = [Users, Phonebook];

class Database{
    constructor(){
        this.init();
    }

    init(){
        this.connection = new sequelize(databaseConfig);

        models
        .map(model => model.init(this.connection))
        .map(model => model.associate && model.associate(this.connection.models));
    }
}

module.exports = new Database();