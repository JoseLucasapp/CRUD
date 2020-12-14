const express = require('express');
const consign = require('consign');

const app = express();

consign()
.include('app/routes')
.then('app/controllers')
.then('config/dbConnection.js')
.into(app);

module.exports = app;