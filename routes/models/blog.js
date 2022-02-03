const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now //If no date created default to Date.now instead
    }
})

module.exports = mongoose.model("Blog", blogSchema);