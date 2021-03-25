module.exports.delete = (req, res)=>{
    const DAO = require('../models/Delete')();
    const Delete = new DAO;
    Delete.delete(req, res);
}