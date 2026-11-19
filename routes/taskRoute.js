const express = require("express");
const router = express.Router();

const taskController = require("../controllers/taskController");

// Create a task
router.post("/", taskController.createTask);

// Get all tasks
router.get("/", taskController.getAllTasks);

// Get a single task
router.get("/:id", taskController.getSingleTask);

// Update a task
router.put("/:id", taskController.updateTask);

// Delete a task
router.delete("/:id", taskController.deleteTask);

// Mark task as completed
router.patch("/:id/complete", taskController.completeTask);

// Filter tasks by status
router.get("/filter", taskController.filterTasks);



module.exports = router;