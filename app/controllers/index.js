module.exports.users = (application, req, res)=>{
    res.send('users');
}

module.exports.new = (application, req, res)=>{
    const mongoose = require('mongoose');

    let novoUsuario = new application.app.models.users_model(mongoose);
    novoUsuario.newUser();
}