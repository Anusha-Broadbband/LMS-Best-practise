'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _require = require('./schemas/Book'),
    Book = _require.Book;

var connection = null;

var init = exports.init = function init(connectionObj) {
  connection = connectionObj;
  BookObj().sync().then(function () {
    console.log('Book table created');
  });
};

var BookObj = exports.BookObj = function BookObj() {
  return Book(connection);
};