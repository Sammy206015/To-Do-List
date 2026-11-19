const express = require ("express");

require ("./db");

const PORT = 4000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the To-Do List API");
});

app.use("/api/tasks", require("./routes/taskRoute"));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});