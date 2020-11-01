var sequelize = require('sequelize');

const BookModel = {
  name: sequelize.STRING,
  author: sequelize.STRING,
  price: sequelize.INTEGER,
};

export const Book = (connection) => {
  return connection.define('books', BookModel);
};
