const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

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