const express = require("express");
const router = express.Router();
const User = require("./models");

router.get("/todos", async (req, res) => {
  const task = await User.findAll();
  res.status(200).json(task);
});

router.post("/todos", async (req, res) => {
  const data = req.body;
  res.status(201).json(data);
});

router.get("/todos/:id", (req, res) => {});

router.put("/todos/:id", (req, res) => {});

router.delete("/todos/:id", (req, res) => {});

module.exports = router;
