const { DataTypes } = require('sequelize');
const sequelize = require('./index')


const Contact = sequelize.define(
  'Contacts ',
  {
    // Model attributes are defined here
    permanent_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    current_address: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  },
);

// `sequelize.define` also returns the model
module.exports = Contact