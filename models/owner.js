const mongoose = require('mongoose');

// Create Owner Schema
const ownerSchema =  new mongoose.Schema({
    fullname:{
        type:String,
        minLength:3,
    },
    email:{
        type:String,
        
    },
    password:{
        type:String,
        
    },
    contact:{
        type:Number
    },
    picture:{
        type:String
    },
});

module.exports = mongoose.model(
    'owner',ownerSchema
)