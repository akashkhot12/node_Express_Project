const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("expresstask", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

const connectToDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("sucessfully connected. ");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { sequelize, connectToDB };
