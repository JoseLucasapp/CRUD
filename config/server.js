const express = require('express');
const consign = require('consign');

const app = express();

app.use(express.json());

consign()
.include('app/routes')
.then('app/controllers')
.then('app/models')
.into(app);

module.exports = app;