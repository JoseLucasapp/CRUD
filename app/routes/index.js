module.exports = (application)=>{
    application.get('/users',(req,res)=>{
        application.app.controllers.index.users(application, req, res);
    });
    application.get('/users/:id',(req,res)=>{
        application.app.controllers.index.users_id(application, req, res);
    });
    application.post('/new', (req, res)=>{
        application.app.controllers.index.new(application, req, res);
    });
    application.put('/update/:id', (req, res)=>{
        application.app.controllers.index.update(application, req, res);
    });
}