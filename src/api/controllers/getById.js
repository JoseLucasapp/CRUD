module.exports.getById = (req, res)=>{
    const DAO = require('../models/FindById')();
    const GetById = new DAO;
    GetById.findById(req, res);
}