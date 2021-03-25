const {User} = require('../../config/db/dbSchema');

function Update(){
    
}

Update.prototype.update = (req, res)=>{
    let id = req.params.id;
    let body = req.body;
    User.updateOne({_id: id}, {$set:{
        name: body.name,
        age: body.age,
        languages: body.languages
    }}).exec((err)=>{
        if(err){
            res.json(err);
            return;
        }else{
            res.json({msg: 'success'});
        }
    })
}

module.exports = ()=>{
    return Update;
}