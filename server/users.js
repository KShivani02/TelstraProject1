const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name:String,
    email: String,
    password: String,
    googleId: String 
})

const UserModel = mongoose.model("regs", UserSchema)

module.exports= UserModel