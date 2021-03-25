const {User} = require('../../config/db/dbSchema');

function FindAll(){
    
}

FindAll.prototype.findAllUsers = (req, res)=>{
    User.find().exec((err, usersData)=>{
        return res.json(usersData);
    });
}

module.exports = ()=>{
    return FindAll
}