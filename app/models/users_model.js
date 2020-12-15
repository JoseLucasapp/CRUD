function users_model(mongoose){
    mongoose.connect('mongodb://localhost:27017/teste', {useNewUrlParser: true}).then(()=>{console.log('Conectado no Mongo')}).catch((err)=>{console.log(err)});
}

users_model.prototype.newUser = ()=>{
    
}

module.exports = ()=>{
    return users_model;
}