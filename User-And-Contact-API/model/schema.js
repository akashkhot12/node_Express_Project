const mongoose = require("mongoose");

const userData = new mongoose.Schema(
  {
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    userName: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    phone: { type: String, require: true, unique: true }
  },
  {created_at    : { type: Date, required: true, default: Date.now }}
);

module.exports = mongoose.model("user", userData);
