const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let postSchema = new Schema({
   title:String,
   content:String,
   createdAt:{
       type:Date,
       default:new Date()
   }
});

module.exports = postSchema;