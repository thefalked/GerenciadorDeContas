const express = require('express');
const routes = express.Router();

const ContaController = require('./controllers/ContaController');

routes.get('/contas', ContaController.index);
routes.get('/contas/:id', ContaController.show);
routes.post('/contas', ContaController.store)
routes.put('/contas/:id', ContaController.update);
routes.delete('/contas/:id', ContaController.destroy);

module.exports = routes;