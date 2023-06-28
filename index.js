const express = require('express');
const connection = require("./connection");
const productRoute = require('./routes/customers');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/customers', productRoute);

module.exports = app;