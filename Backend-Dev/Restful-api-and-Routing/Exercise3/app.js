const express = require('express');
const app = express();

let books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { id: 2, title: '1984', author: 'George Orwell', year: 1949 },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { id: 4, title: 'Book Four', author: 'Author A', year: 2001 },
  { id: 5, title: 'Book Five', author: 'Author B', year: 2005 },
  { id: 6, title: 'Book Six', author: 'Author C', year: 2010 }
];

app.get('/api/books', (req, res) => {
  let page = parseInt(req.query.page) || 1;
  let limit = parseInt(req.query.limit) || 2;

  let start = (page - 1) * limit;
  let end = start + limit;

  let paginatedBooks = books.slice(start, end);

  res.json({
    page,
    limit,
    total: books.length,
    data: paginatedBooks
  });
});

app.listen(3000);
