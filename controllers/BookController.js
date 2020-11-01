var BookService = require('../services/BookService');

export const create = (req, res) => {
  let {bookName: name, bookAuthor: author, bookPrice: price} = req.body;
  BookService.create(name, author, price).then(() => {
    res.send('Successfully Created.');
  });
};

export const deleteBook = (req, res) => {
  let {bookName: name} = req.body;
  BookService.deleteBook(name).then(() => {
    res.send('Deleted Successfully.');
  });
};

export const update = (req, res) => {
  let {
    bookName: name,
    bookAuthor: author,
    bookPrice: price,
    bookId: id,
  } = req.body;
  BookService.update(id, name, author, price).then(() => {
    res.send('Updated Successfully.');
  });
};

export const get = (req, res) => {
  BookService.get().then((books) => {
    res.send(books);
  });
};

export default {
  create,
  update,
  get,
  deleteBook,
};
