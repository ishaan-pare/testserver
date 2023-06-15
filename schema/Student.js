const mongoose = require("mongoose");


const Student = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,

    },
    age: {
        type: String,
        required: true,

    },
    standard: {
        type: String,
        required: true,

    }
});

module.exports = mongoose.model("Student", Student);