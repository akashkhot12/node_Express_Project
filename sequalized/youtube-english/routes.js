const express = require("express");
const router = express.Router();
const Task = require("./models");

router.get("/todos", async (req, res) => {
  const task = await Task.findAll();
  res.status(200).json(task);
});

router.post("/todos", async (req, res) => {
  const { content, description } = req.body;
  const newTask = await Task.build({
    content: content,
    description: description,
  });

  try {
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/todos/:id", async (req, res) => {
  const task = await Task.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(201).json(task);
});

router.put("/todos/:id", async (req, res) => {
  const task = await Task.findOne({
    where: {
      id: req.params.id,
    },
  });
  const { is_complete, content, description } = req.body;

  await task.set({
    is_complete: is_complete,
    content: content,
    description: description,
  });

  await task.save();

  res.status(201).json(task);
});

router.patch("/todos/:id", async (req, res) => {
  const task = await Task.findOne({
    where: {
      id: req.params.id,
    },
  });
  const { is_complete } = req.body;

  await task.set({
    is_complete: is_complete,
  });

  await task.save();

  res.status(201).json(task);
});

router.delete("/todos/:id", async (req, res) => {
  const task = await Task.findOne({
    where: {
      id: req.params.id,
    },
  });
  try {
    await task.destroy();
    res.status(204).json({ message: "deleted" });
  } catch (error) {
    res.status(204).json({ message: error });
  }
});

module.exports = router;
