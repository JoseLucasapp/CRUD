const mongoose = require('mongoose');
const schema = mongoose.Schema;

const users_schema = schema({
    name:{
        type: String
    },
    age:{
        type:Number
    },
    languages:{
        type: [String]
    },
    date:{
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('user', users_schema);

module.exports = {User};