const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    names:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    department:{type:String,required:true},
});

let model = mongoose.model('User',schema);
module.exports = model;