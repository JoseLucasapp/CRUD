module.exports = (app)=>{
    require('../api/routes/get')(app);
    require('../api/routes/post')(app);
    require('../api/routes/put')(app);
    require('../api/routes/delete')(app);
}