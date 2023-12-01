const express = require("express");
const { getNote, createNote } = require("../controllers/noteController");
const noteRouter = express.Router();

noteRouter.get('/',getNote);

noteRouter.post('/',createNote);

noteRouter.post('/',createNote);

noteRouter.post('/',createNote);
 
module.exports = noteRouter