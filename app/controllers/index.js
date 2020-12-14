const { application } = require("express");

module.exports.users = (application, req, res)=>{
    res.send('users')
}