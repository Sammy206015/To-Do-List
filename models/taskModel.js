const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Pending", "Completed"],
        default: "Pending"
    },

    dueDate: {
        type: Date
    }
}, {
    timestamps: true
});

const taskModel = mongoose.model("Task", taskSchema);

module.exports = taskModel;