const mongoose = require('mongoose');

// Create Owner Schema
const productSchema =  new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discount:{
        type:Number,
        default:0
    },
    bgcolor:{
        type:String
    },
    panelcolor:{
        type:String
    },
    textcolor:{
        type:String
    },
});

module.exports = mongoose.model(
    'products',productSchema
)