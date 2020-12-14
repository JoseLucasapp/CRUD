module.exports = (application)=>{
    application.get('/users',(req,res)=>{
        application.app.controllers.index.users(application, req, res);
    });
}