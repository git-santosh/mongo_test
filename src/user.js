const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let userSchema = new Schema({
    name :{
        type:String,
        validate:{
            validator:(name) => name.length > 2,
            message:'Name must be longer than 2 charactors.'
        },
        required:[true,'Name is required.']
    },
    postCount:Number
});

let User = mongoose.model('User',userSchema);

module.exports = User;