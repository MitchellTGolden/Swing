const {User} = require('../models/game.model'),
    jwt = require('jsonwebtoken'),
    bcrypt = require('bcrypt');

module.exports = {
    register: (req,res) => {
        console.log(req.body)
        User.create(req.body)
            .then(data =>{
                console.log("We're in...")
                res.cookie('usertoken', jwt.sign({id:data._id}, process.env.JWT_KEY), {
                    httpOnly:true, 
                    expires: new Date(Date.now() + 90000000)
                }).json({msg:"success", 
                userLogged:{
                    firstName:data.firstName, 
                    lastName: data.lastName }
                })
            })
            .catch(err => res.json({msg: "made it here"}))
    },
    login: (req,res) => {
        User.findOne({email:req.body.email})
        .then(data => {
            if(user === null){
                res.json({msg:"Invalid login attempt!"})
            }
            else{
                bcrypt.compare(req.body.password, data.password)
                    .then( isValid  => {
                        if( isValid === true){
                            res.cookie("usertoken", jwt.sign({_id:data._id}, process.JWT_KEY), {
                                httpOnly:true, 
                                expires: new Date(Date.now() + 90000000)
                            }).json({
                                msg:"success", 
                                userLogged:{
                                    firstName:data.firstName, 
                                    lastName: data.lastName }

                            })
                        }
                    })
                    .catch(err => res.json({msg: "Invalid login attempt!"}))
            }
        })
        .catch(err => res.json(err.errors))
    },
    logout: (req,res) => {
        res.clearCookie('usertoken')
        res.json({msg:"logged out"})
    }
}