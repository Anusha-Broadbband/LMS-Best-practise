import {BookObj} from '../Schema';

var {Book} = require('../Schema');

export const create = (name, author, price) => {
  return BookObj().create({
    name,
    author,
    price,
  });
};

export const deleteBook = (name) => {
  return BookObj().destroy({where: {bookName: name}});
};

export const update = (id, name, author, price) => {
  return BookObj().update(
    {
      bookName: name,
      bookAuthor: author,
      bookPrice: bookPrice,
    },
    {where: {id: id}}
  );
};

export const get = () => {
  return BookObj().findAll();
};

export default {
  get,
  create,
  update,
  deleteBook,
};
