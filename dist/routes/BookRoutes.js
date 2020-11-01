'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var BookController = require('../controllers/BookController');

var init = exports.init = function init(app) {
  app.post('/book', function (req, res) {
    return BookController.create(req, res);
  });

  app.get('/book', function (req, res) {
    return BookController.get(req, res);
  });

  app.delete('/book', function (req, res) {
    return BookController.delete(req, res);
  });

  app.put('/book', function (req, res) {
    return BookController.update(req, res);
  });
};