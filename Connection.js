const sequelize = require('sequelize');
const {DATABASE_CONFIG} = require('./config/Config');
var Schema = require('./Schema');

const connection = new sequelize(
  DATABASE_CONFIG.NAME,
  DATABASE_CONFIG.USER_NAME,
  DATABASE_CONFIG.PASSWORD,
  {
    dialect: DATABASE_CONFIG.DIALECT,
    define: {
      timestamps: false,
    },
  }
);

export const init = () => {
  connection
    .authenticate()
    .then(() => {
      console.log('connection established:');
      Schema.init(connection);
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    });
};
