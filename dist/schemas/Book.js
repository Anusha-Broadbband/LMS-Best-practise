'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sequelize = require('sequelize');

var BookModel = {
  name: sequelize.STRING,
  author: sequelize.STRING,
  price: sequelize.INTEGER
};

var Book = exports.Book = function Book(connection) {
  return connection.define('books', BookModel);
};