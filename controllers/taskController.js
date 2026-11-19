const taskModel = require('../models/taskModel');

// Create a new task
exports.createTask = async (req, res) => {
    try {
        const { title, description, dueDate } = req.body;

        if (!title || !description) {
            return res.status(400).json({
                message: "Title and description are required"
            });
        }

        const task = await taskModel.create({
            title,
            description,
            dueDate
        });

        res.status(201).json({
            message: "Task created successfully",
            task
        });

    } catch (error) {
        res.status(500).json({
            message: "Error creating task",
            error: error.message
        });
    }
};

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await taskModel.find();

        res.status(200).json({
            message: "Tasks retrieved successfully",
            totalTasks: tasks.length,
            tasks
        });

    } catch (error) {
        res.status(500).json({
            message: "Error retrieving tasks",
            error: error.message
        });
    }
};
