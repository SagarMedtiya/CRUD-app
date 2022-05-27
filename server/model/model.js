const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    Title:{
        type: String,
        required: true
    },
    Description:{
        type: String,
        required: false
    },
    StartDateAndTime:{
        type: Number,
        required: true
    },
    EndDateAndTime:{
        type: Number,
        required: true
    },
    Priority:{
        type: Number,
        required: true
    },
    Status:{
        type: String,
        required: true
    }
})

const TaskDB = mongoose.model('taskdb', schema);

module.exports = TaskDB;