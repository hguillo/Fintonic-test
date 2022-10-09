require('dotenv').config();
require("./config/database").connect();

const express = require('express');
const productRoutes = require('./routes/product');
const loginRoutes = require('./routes/login');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(productRoutes);
app.use(loginRoutes);

module.exports = app;
