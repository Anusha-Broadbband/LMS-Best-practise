'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Routes = require('./routes');
var Connection = require('./Connection');

var init = exports.init = function init(app) {
  Connection.init();
  Routes.init(app);
};