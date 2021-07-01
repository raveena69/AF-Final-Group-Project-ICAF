const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const confSchema = new Schema({
    guestSpeaker:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const Conference = mongoose.model('Conference',confSchema);
module.exports = Conference;