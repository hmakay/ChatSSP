const mongoose = require('mongoose');


const ChatSchema = new mongoose.Schema({
    message:{
        text:[String],
        time:[Date]
    },
    users:[String],   
    updated: { type: Date, default: Date.now },
   
})

module.exports = mongoose.model('Chat',ChatSchema);