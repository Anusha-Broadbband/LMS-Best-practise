var Routes = require('./routes');
var Connection = require('./Connection');

export const init = (app) => {
  Connection.init();
  Routes.init(app);
};
