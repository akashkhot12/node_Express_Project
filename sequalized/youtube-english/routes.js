const express = require("express");
const router = express.Router();
const Task = require("./models");

router.get("/todos", async (req, res) => {
  const task = await User.findAll();
  res.status(200).json(task);
});

router.post("/todos", async (req, res) => {
  const { content, description } = req.body;

  const newTask = await Task.build({
    'content': content,
    'description': description,
  });

  try {
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/todos/:id", (req, res) => {});

router.put("/todos/:id", (req, res) => {});

router.delete("/todos/:id", (req, res) => {});

module.exports = router;
