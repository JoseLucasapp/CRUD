module.exports.users = (application, req, res)=>{
    res.send('users');
}

module.exports.new = (application, req, res)=>{
    let novoUsuario = new application.app.models.users_model();
    novoUsuario.newUser(req, res);
}