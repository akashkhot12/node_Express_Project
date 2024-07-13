const { Sequelize,DataTypes,Model } = require("sequelize");

const sequelize = new Sequelize("sequal", "postgres", "root", {
  host: "localhost",
  logging:false,
  dialect: "postgres",
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const db = {};
db.sequelize = Sequelize;
db.sequelize = sequelize;

db.contact = require('./contact')(sequelize,DataTypes,Model);
db.user = require('./user')(sequelize,DataTypes,Model);

db.sequelize.sync({ force: false });

module.exports = db;
