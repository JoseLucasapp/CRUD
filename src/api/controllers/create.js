module.exports.create = (req, res)=>{
    const DAO = require('../models/Create')();
    const Create = new DAO;
    Create.create(req, res);
}