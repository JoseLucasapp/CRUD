module.exports.getAll = (req, res)=>{
    const DAO = require('../models/FindAll')();
    const GetAll = new DAO;
    GetAll.findAllUsers(req, res);
}