module.exports = (app)=>{
    app.delete('/users/delete/:id', (req, res)=>{
        require('../controllers/delete').delete(req, res);
    });
}