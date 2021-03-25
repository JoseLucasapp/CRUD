const {User} = require('../../config/db/dbSchema');

function Delete(){
    
}

Delete.prototype.delete = (req, res)=>{
    let id = req.params.id;
    User.deleteOne({_id: id}).exec((err)=>{
        if(err){
            res.json(err);
            return;
        }
        return res.json({result: 'Success'});
    })
}

module.exports = ()=>{
    return Delete;
}