const mongoose = require('mongoose');

function users_model(){
    mongoose.connect('mongodb://localhost:27017/teste', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{console.log('Conectado no Mongo')}).catch((err)=>{console.log(err)});
}

users_model.prototype.newUser = (req,res)=>{
    const users = mongoose.model('userData', {
        name:{
            type: String
        },
        age:{
            type:Number
        },
        date:{
            type: Date,
            default: Date.now
        }
    });

    const addNewUser = new users({
        name: req.body.name,
    });
    addNewUser.save().then(()=>{
        res.json(users);
    }).catch((err)=>{
        res.json(err);
    });
}

module.exports = ()=>{
    return users_model;
}