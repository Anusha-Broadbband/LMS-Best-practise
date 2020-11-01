'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var BookService = require('../services/BookService');

var create = exports.create = function create(req, res) {
  var _req$body = req.body,
      name = _req$body.bookName,
      author = _req$body.bookAuthor,
      price = _req$body.bookPrice;

  BookService.create(name, author, price).then(function () {
    res.send('Successfully Created.');
  });
};

var deleteBook = exports.deleteBook = function deleteBook(req, res) {
  var name = req.body.bookName;

  BookService.deleteBook(name).then(function () {
    res.send('Deleted Successfully.');
  });
};

var update = exports.update = function update(req, res) {
  var _req$body2 = req.body,
      name = _req$body2.bookName,
      author = _req$body2.bookAuthor,
      price = _req$body2.bookPrice,
      id = _req$body2.bookId;

  BookService.update(id, name, author, price).then(function () {
    res.send('Updated Successfully.');
  });
};

var get = exports.get = function get(req, res) {
  BookService.get().then(function (books) {
    res.send(books);
  });
};

exports.default = {
  create: create,
  update: update,
  get: get,
  deleteBook: deleteBook
};