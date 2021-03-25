const {User} = require('../../config/db/dbSchema');

function FindById(){
    
}

FindById.prototype.findById = (req, res)=>{
    let id = req.params.id;
    User.findById(id).exec((err, userData)=>{
        return res.json(userData);
    });
}

module.exports = ()=>{
    return FindById;
}