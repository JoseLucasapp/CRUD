const mongoose = require('mongoose');
const users_schema = mongoose.model('userscollection',{
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

function users_model(){
    mongoose.connect('mongodb://localhost:27017/teste', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

users_model.prototype.newUser = (req,res)=>{
    const addNewUser = new users_schema({
        name: req.body.name,
        age: req.body.age
    });
    addNewUser.save().then(()=>{
        res.json({response: 'Sucess'});
    }).catch((err)=>{
        res.json(err);
    });
}

users_model.prototype.findAllUsers = (req, res)=>{
    users_schema.find().exec((err, usersData)=>{
        return res.json(usersData);
    });
}

users_model.prototype.findOneUser = (req, res)=>{
    let id = req.params.id;
    users_schema.findById(id).exec((err, userData)=>{
        return res.json(userData);
    });
}

module.exports = ()=>{
    return users_model;
}