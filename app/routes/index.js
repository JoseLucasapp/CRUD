module.exports = (application)=>{
    application.get('/users',(req,res)=>{
        application.app.controllers.index.users(application, req, res);
    });
    application.post('/new', (req, res)=>{
        application.app.controllers.index.new(application, req, res);
    });
}