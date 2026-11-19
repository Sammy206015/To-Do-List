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


module.exports = router;