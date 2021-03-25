module.exports = (app)=>{
    app.get('/users',(req,res)=>{
        require('../controllers/getAll').getAll(req, res);
    });
    app.get('/users/:id',(req,res)=>{
        require('../controllers/getById').getById(req, res);
    });
}