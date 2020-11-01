var BookController = require ('../controllers/BookController');

export const init = app => {
  app.post ('/book', (req, res) => BookController.create (req, res));

  app.get ('/book', (req, res) => BookController.get (req, res));

  app.delete ('/book', (req, res) => BookController.delete (req, res));

  app.put ('/book', (req, res) => BookController.update (req, res));
};
