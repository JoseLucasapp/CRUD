const express = require('express');
const consign = require('consign');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

consign()
.include('app/routes')
.then('app/controllers')
.then('app/models')
.into(app);

module.exports = app;