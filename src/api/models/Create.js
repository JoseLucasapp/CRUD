const {validationResult} = require('express-validator');
const {User} = require('../../config/db/dbSchema');

function Create(){
    
}

Create.prototype.create = (req,res)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors });
    }
    else{
        
        let languages = req.body.languages.split(',');
        languages = languages.map((lang)=> lang.replace(/\s/g, ''));

        const addNewUser = new User({
            name: req.body.name,
            age: req.body.age,
            languages: languages
        });
        addNewUser.save().then(()=>{
            return res.status(200).json({response: 'Success'});
        }).catch((err)=>{
            res.json(err);
        });
    }
};

module.exports = ()=>{
    return Create;
}