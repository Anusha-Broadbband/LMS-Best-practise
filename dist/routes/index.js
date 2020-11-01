'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var BookRoutes = require('./BookRoutes');
var init = exports.init = function init(app) {
  BookRoutes.init(app);
  //AuthRoutes.init(app)
};