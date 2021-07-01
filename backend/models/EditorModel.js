const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const editorSchema = new Schema({
    firstName: {
        type:String,
        required:true
    },
    lastName: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const Editor = mongoose.model('Editor',editorSchema);

module.exports = Editor;