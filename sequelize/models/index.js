const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('bootcoding', 'postgres', 'root', {
    host: 'localhost',
    dialect:'postgres' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }