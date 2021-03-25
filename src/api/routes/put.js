module.exports = (app)=>{
    app.put('/users/update/:id', (req, res)=>{
        require('../controllers/update').update(req, res);
    });
}