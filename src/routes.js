const {
  addbooksHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBooksHendler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addbooksHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBooksHendler,
  },
];
module.exports = routes;
