const { sequelize } = require("./db");
const { DataTypes } = require("sequelize");

sequelize.define("Task", {
  content: {
    type: DataTypes.STRING,
    validate: {
      max: 150,
    },
  },
  description: {
    type: DataTypes.TEXT,
  },
  is_complete: {
    type: DataTypes.BOOLEAN,
  },
});

sequelize.sync();
