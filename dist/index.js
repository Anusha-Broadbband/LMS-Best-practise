'use strict';

var Express = require('express');
var BodyParser = require('body-parser');
var Bootstrap = require('./Bootstrap');
var Config = require('./config/Config');
var cors = require('cors');
var app = new Express();

app.use(cors());
app.use(BodyParser.json());

Bootstrap.init(app);

app.listen(Config.APP_PORT, function () {
  console.log('listening on 4000');
});