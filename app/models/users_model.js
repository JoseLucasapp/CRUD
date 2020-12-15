const mongoose = require('mongoose');

function users_model(){
    mongoose.connect('mongodb://localhost:27017/teste', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
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
        age: req.body.age
    });
    addNewUser.save().then(()=>{
        res.json({sucess: 'new user successfully registered'});
    }).catch((err)=>{
        res.json(err);
    });
}

module.exports = ()=>{
    return users_model;
}