const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nome: String,
    email: String,
    age: Number
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel