const mongoose = require('mongoose');

function users_model(){
    mongoose.connect('mongodb://localhost:27017/teste', {useNewUrlParser: true}).then(()=>{console.log('Conectado no Mongo')}).catch((err)=>{console.log(err)});
}

users_model.prototype.newUser = (req,res)=>{
    const users = mongoose.model('userData', {name:String});

    const addNewUser = new users({
        name: req.body,
    });
    addNewUser.save().then(()=>{
        console.log('Cadastrado');
    })
}

module.exports = ()=>{
    return users_model;
}