const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: false
    },
    start:{
        type: Date,
        required: true
    },
    end:{
        type: Date,
        required: true
    },
    priority:{
        type: Number,
        required: true
    },
    status:{
        type: String,
        required: true
    }
})

const TaskDB = mongoose.model('taskdb', schema);

module.exports = TaskDB;