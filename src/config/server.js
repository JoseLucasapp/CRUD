const express = require('express');

const app = express();

require('./middlewares')(app);
require('./routes')(app);

app.listen(3000);

module.exports = app;