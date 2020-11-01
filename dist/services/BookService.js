'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = exports.update = exports.deleteBook = exports.create = undefined;

var _Schema = require('../Schema');

var _require = require('../Schema'),
    Book = _require.Book;

var create = exports.create = function create(name, author, price) {
  return (0, _Schema.BookObj)().create({
    name: name,
    author: author,
    price: price
  });
};

var deleteBook = exports.deleteBook = function deleteBook(name) {
  return (0, _Schema.BookObj)().destroy({ where: { bookName: name } });
};

var update = exports.update = function update(id, name, author, price) {
  return (0, _Schema.BookObj)().update({
    bookName: name,
    bookAuthor: author,
    bookPrice: bookPrice
  }, { where: { id: id } });
};

var get = exports.get = function get() {
  return (0, _Schema.BookObj)().findAll();
};

exports.default = {
  get: get,
  create: create,
  update: update,
  deleteBook: deleteBook
};