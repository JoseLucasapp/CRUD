const {body} = require('express-validator');

module.exports = (application)=>{
    application.get('/users',(req,res)=>{
        application.app.controllers.index.users(application, req, res);
    });
    application.get('/users/:id',(req,res)=>{
        application.app.controllers.index.users_id(application, req, res);
    });
    application.post('/users/new',[
        body("name").isLength({min: 3}).withMessage('lower than 3'),
        body("age").isInt().withMessage('Age not number'),
        body("language").isEmpty().withMessage('Not empty')
    ],(req, res)=>{
        application.app.controllers.index.new(application, req, res);
    });
    application.put('/users/update/:id', (req, res)=>{
        application.app.controllers.index.update(application, req, res);
    });
    application.delete('/users/delete/:id', (req, res)=>{
        application.app.controllers.index.delete(application, req, res);
    });
}