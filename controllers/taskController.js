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

exports.getSingleTask = async (req, res) => {
    try {
        const { id } = req.params;

        const task = await taskModel.findById(id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json({
            message: "Task retrieved successfully",
            task
        });

    } catch (error) {
        res.status(500).json({
            message: "Error retrieving task",
            error: error.message
        });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedTask = await taskModel.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedTask) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json({
            message: "Task updated successfully",
            task: updatedTask
        });

    } catch (error) {
        res.status(400).json({
            message: "Error updating task",
            error: error.message
        });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedTask = await taskModel.findByIdAndDelete(id);

        if (!deletedTask) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json({
            message: "Task deleted successfully",
            task: deletedTask
        });

    } catch (error) {
        res.status(500).json({
            message: "Error deleting task",
            error: error.message
        });
    }
};

exports.completeTask = async (req, res) => {
    try {
        const { id } = req.params;

        const task = await taskModel.findByIdAndUpdate(
            id,
            { status: "Completed" },
            {
                new: true,
                runValidators: true
            }
        );

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json({
            message: "Task marked as completed",
            task
        });

    } catch (error) {
        res.status(500).json({
            message: "Error completing task",
            error: error.message
        });
    }
};

exports.filterTasks = async (req, res) => {
    try {
        const { status } = req.query;

        if (!status || !["Pending", "Completed"].includes(status)) {
            return res.status(400).json({
                message: "Please provide a valid status: Pending or Completed"
            });
        }

        const tasks = await taskModel.find({ status });

        res.status(200).json({
            message: `${status} tasks retrieved successfully`,
            totalTasks: tasks.length,
            tasks
        });

    } catch (error) {
        res.status(500).json({
            message: "Error filtering tasks",
            error: error.message
        });
    }
};

