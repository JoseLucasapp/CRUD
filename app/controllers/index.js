const { application } = require("express");

module.exports.users = (application, req, res)=>{
    let findAll = new application.app.models.users_model();
    findAll.findAllUsers(req, res);
}

module.exports.users_id = (application, req, res)=>{
    let findById = new application.app.models.users_model();
    findById.findOneUser(req, res);
}

module.exports.new = (application, req, res)=>{
    let newUser = new application.app.models.users_model();
    newUser.newUser(req, res);
}

module.exports.update = (application, req, res)=>{
    let updateUser = new application.app.models.users_model();
    updateUser.updateUser(req, res);
}

module.exports.delete = (application, req, res)=>{
    let deleteUser = new application.app.models.users_model();
    deleteUser.deleteUser(req, res);
}