module.exports = (application)=>{
    application.get('/',(req,res)=>{
        application.app.controllers.index.get(application, req, res);
    });
}