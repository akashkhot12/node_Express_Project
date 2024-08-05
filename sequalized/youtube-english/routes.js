const express = require("express");
const router = express.Router();

router.get("/todos", (req, res) => {
  res.send("hello world testing");
});

router.post("/todos", (req, res) => {});

router.get("/todos/:id", (req, res) => {});

router.put("/todos/:id", (req, res) => {});

router.delete("/todos/:id", (req, res) => {});

module.exports = router;
