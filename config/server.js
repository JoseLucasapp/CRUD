const express = require('express');
const consign = require('consign');

const app = express();

consign()
.include('app/routes')
.then('app/controllers')
.into(app);

module.exports = app;