var {Book} = require('./schemas/Book');

let connection = null;

export const init = (connectionObj) => {
  connection = connectionObj;
  BookObj()
    .sync()
    .then(() => {
      console.log('Book table created');
    });
};

export const BookObj = () => {
  return Book(connection);
};
