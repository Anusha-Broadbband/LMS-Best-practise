'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sequelize = require('sequelize');

var _require = require('./config/Config'),
    DATABASE_CONFIG = _require.DATABASE_CONFIG;

var Schema = require('./Schema');

var connection = new sequelize(DATABASE_CONFIG.NAME, DATABASE_CONFIG.USER_NAME, DATABASE_CONFIG.PASSWORD, {
  dialect: DATABASE_CONFIG.DIALECT,
  define: {
    timestamps: false
  }
});

var init = exports.init = function init() {
  connection.authenticate().then(function () {
    console.log('connection established:');
    Schema.init(connection);
  }).catch(function (err) {
    console.error('Unable to connect to the database:', err);
  });
};