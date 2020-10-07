const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o App
const app = express();
// Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
//Inserindo Models
requireDir('./src/models');

//const Product = mongoose.model('Product');

app.use('/api', require('./src/models/routes'));

app.listen(3001);