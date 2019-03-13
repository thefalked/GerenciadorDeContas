const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors()) 

mongoose
  .connect(
    //'mongodb://nodeapi:nodeapi123@ds331135.mlab.com:31135/node-api',
    // 'mongodb+srv://<USUARIO>:<SENHA>@cluster0-plxve.mongodb.net/node-api?retryWrites=true',
     'mongodb+srv://giuliano:batata@cluster0-15dj6.mongodb.net/node-api?retryWrites=true',
    {
      useNewUrlParser: true
    })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3000);