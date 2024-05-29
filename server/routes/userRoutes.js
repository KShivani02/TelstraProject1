const express = require("express");
const bcrypt = require("bcrypt");
const UserModel = require("../users");
const router = express.Router();


router.post("/signup", async (req, res) => {
    const {name, email, password } = req.body
    try{
        const passwordHash = await bcrypt.hash(password, 10)
        const userdata = await UserModel.create({
            name,
            email,
            password: passwordHash
        })
        const user = await userdata.save()
        res.json({message:'user created', user })
        
    }
    catch(error){
        res.json({error})
    }
})

router.post("/", async (req, res) => {
    const {email, password} = req.body
    try{
        const user1 = await UserModel.findOne({email})
        if(!user1){
           return res.json({message: "Not a user"})
        }
        const pass = await bcrypt.compare(password, user1.password)
        if(pass){
            return res.json({message:"login successful"})
        }
        else{
            return res.json({message:"incorrect password"})
        }   
    }
    catch(error){
        res.json({error})
    }
})

module.exports = router;