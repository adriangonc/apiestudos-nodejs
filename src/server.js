const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://devdb:225602@dev-db-chjsq.mongodb.net/dev-db?retryWrites=true&w=majority', {
//mongoose.connect('mongodb://devdb:225602@dev-db-shard-00-00-chjsq.mongodb.net:27017,dev-db-shard-00-01-chjsq.mongodb.net:27017,dev-db-shard-00-02-chjsq.mongodb.net:27017/admin?ssl=true&replicaSet=DEV-DB-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());

app.use(routes);

app.listen(3333);