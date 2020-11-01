var BookRoutes = require('./BookRoutes');
export const init = (app) => {
  BookRoutes.init(app);
  //AuthRoutes.init(app)
};
