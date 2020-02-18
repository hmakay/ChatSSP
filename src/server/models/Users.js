const mongoose = require('mongoose');



const UserSchema = new mongoose.Schema({
    name:String,
    cpf:String,
    Chat:[String]
    
})

module.exports = mongoose.model('Users',UserSchema);