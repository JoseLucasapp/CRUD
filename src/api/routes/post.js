const {body} = require('express-validator');
module.exports = (app)=>{
    app.post('/users/new',[
        body("name").isLength({min: 3}).withMessage('lower than 3'),
        body("age").isInt().withMessage('Age not number'),
        body("languages").isLength({min: 1}).withMessage('Not empty')
    ],(req, res)=>{
        require('../controllers/create').create(req, res);
    });
}