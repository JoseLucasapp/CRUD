module.exports.update = (req, res)=>{
    const DAO = require('../models/Update')();
    const Update = new DAO;
    Update.update(req, res);
}