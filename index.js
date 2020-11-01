const Express = require('express');
const BodyParser = require('body-parser');
var Bootstrap = require('./Bootstrap');
var Config = require('./config/Config');
var cors = require('cors');
const app = new Express();

app.use(cors());
app.use(BodyParser.json());

Bootstrap.init(app);

app.listen(Config.APP_PORT, () => {
  console.log('listening on 4000');
});
