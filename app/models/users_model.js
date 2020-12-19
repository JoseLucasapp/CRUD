const {validationResult} = require('express-validator');
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

users_model.prototype.newUser = ((req,res)=>{
    const errors = validationResult(req);
    console.log(errors.array());

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors });
    }
    else{
        const addNewUser = new users_schema({
            name: req.body.name,
            age: req.body.age
        });
        addNewUser.save().then(()=>{
            return res.status(200).json({response: 'Sucess'});
        }).catch((err)=>{
            res.json(err);
        });
    }
});

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

users_model.prototype.updateUser = (req, res)=>{
    let id = req.params.id;
    let body = req.body;
    users_schema.findByIdAndUpdate(id, body,{new: true}, (err, result)=>{
        if(err){
            res.json(err);
            return;
        }
        return res.json(result);
    });
}

users_model.prototype.deleteUser = (req, res)=>{
    let id = req.params.id;
    users_schema.findByIdAndDelete(id, (err, result)=>{
        if(err){
            res.json(err);
            return;
        }
        return res.json({result: 'sucess'});
    });
}

module.exports = ()=>{
    return users_model;
}