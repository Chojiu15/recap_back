const mongoose = require('mongoose')
const {Schema, model} = mongoose


const User = new Schema({
    first_name : {
        type : String,
        required : true
    },
    last_name : {
        type : String,
        required : true
    },
    age : {
        type : Number
    },
    
}, {timestamps: true})

module.exports = model('User', User)