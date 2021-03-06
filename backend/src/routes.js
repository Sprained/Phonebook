const express = require('express');
const routes = express.Router();

const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');
const PhonebookController = require('./app/controllers/PhonebookController');

const authMiddleware = require('./app/middlewares/auth');

//cadastro usuario
routes.post('/users', UserController.store);

//login
routes.post('/session', SessionController.store);

//middleware verifica se usuario ta logado
routes.use(authMiddleware);

routes.get('/phonebook', PhonebookController.index);
routes.post('/phonebook', PhonebookController.store);
routes.delete('/phonebook/:id', PhonebookController.delete);

module.exports = routes;