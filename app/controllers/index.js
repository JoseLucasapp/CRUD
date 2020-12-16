module.exports.users = (application, req, res)=>{
    let findAll = new application.app.models.users_model();
    findAll.findAllUsers(req, res);
}

module.exports.new = (application, req, res)=>{
    let newUser = new application.app.models.users_model();
    newUser.newUser(req, res);
}