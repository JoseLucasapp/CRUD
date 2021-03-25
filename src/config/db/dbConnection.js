const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const URL = 'mongodb://localhost:27017/database';

module.exports = mongoose.connect(URL, {useNewUrlParser: true,useUnifiedTopology: true});