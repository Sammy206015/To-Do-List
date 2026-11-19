const express = require("express");
const router = express.Router();

const taskController = require("../controllers/taskController");

// Create a task
router.post("/", taskController.createTask);

// Get all tasks
router.get("/", taskController.getAllTasks);


module.exports = router;