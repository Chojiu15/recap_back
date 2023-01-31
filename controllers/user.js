const User = require('../models/userModel')


const getAllUsers = async (req, res) => {
    try{
        const users = await User.find()
        res.status(200).json(users)
    }
    catch(err){
        res.status(500).json({error : err.message})
    }
}

const postUser = async (req, res) => {
    try{
        const newUser = await User.create(req.body)
        res.status(201).json(newUser)
    }
    catch(err){
        res.status(500).json({error : err.message})
    }
}

const findUserById = async(req, res) => {
    try {
        const myUser = await User.findById(req.params.id)
        res.status(200).json(myUser)
    }
    catch(err){
        res.status(500).json({error : err.message})
    }
}


module.exports = {getAllUsers, postUser, findUserById}