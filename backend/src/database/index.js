const sequelize = require('sequelize');

const databaseConfig = require('../config/database');

const Users = require('../app/models/Users');

const models = [Users];

class Database{
    constructor(){
        this.init();
    }

    init(){
        this.connection = new sequelize(databaseConfig);

        models
        .map(model => model.init(this.connection));
    }
}

module.exports = new Database();