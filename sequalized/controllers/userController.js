var db = require("../models");
const User = db.user;
var addUser = async (req, res) => {
//   const jane = User.build({ firstName: "Jane", lastName: "khot" });
  const jane = User.create({ firstName: "akash", lastName: "khot" });
  console.log(jane instanceof User); // true
  console.log(jane.firstName);
  await jane.save();
  console.log("Jane was saved to the database!");
  console.log(jane.toJSON());
  res.status(200).json(jane.toJSON());
};

module.exports = {
  addUser, 
};
