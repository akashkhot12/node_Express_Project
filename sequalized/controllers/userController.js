const db = require("../models");
const User = db.user;
const addUser = async (req, res) => {
  const data = await User.create({ firstName: "akash", lastName: "khot" });
  // Save the user to the database (Note: create() already saves the instance to the database)
  await data.save();
  // Send the JSON response
  res.status(200).json(data.toJSON());
};

const getUsers = async (req, res) => {
  const data = await User.findAll({});
  res.status(200).json({ data: data });
};

module.exports = {
  addUser,
  getUsers,
};
