const mongoose = require('mongoose');

// Create User Schema
const userSchema =  new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cart:{
        type:Array,
        default:[]
    },
    isadmin:{
        type:Boolean
    },
    orders:{
        type:Array,
        default:[]
    },
    contact:{
        type:Number
    },
    picture:{
        type:String
    },
});

module.exports = mongoose.model(
    'users',userSchema
)