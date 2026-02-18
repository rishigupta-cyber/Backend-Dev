const express = require('express');
const app = express();

let books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { id: 2, title: '1984', author: 'George Orwell', year: 1949 },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { id: 4, title: 'Node Basics', author: 'John', year: 2020 }
];

app.get('/api/books/search', (req, res) => {
  const query = (req.query.title || '').toLowerCase();
  const results = books.filter(b => b.title.toLowerCase().includes(query));
  res.json(results);
});

app.listen(3000);
