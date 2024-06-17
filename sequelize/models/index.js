const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    username : "postgres",
    password : "root",
    host : "localhost",
    port : 5433,
    dialect : "postgres",
    database : "bootcoding",
    logging:false
});

  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


