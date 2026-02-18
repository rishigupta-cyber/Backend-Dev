const express = require('express');
const app = express();

app.use(express.json());

let books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { id: 2, title: '1984', author: 'George Orwell', year: 1949 },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }
];

let nextId = 4;

const validateYear = (req, res, next) => {
  const { year } = req.body;
  if (year === undefined) return res.status(400).json({ error: 'Year required' });
  if (typeof year !== 'number') return res.status(400).json({ error: 'Year must be number' });
  if (year < 1000 || year > new Date().getFullYear()) {
    return res.status(400).json({ error: 'Year out of range' });
  }
  next();
};

app.post('/api/books', validateYear, (req, res) => {
  const { title, author, year } = req.body;

  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author required' });
  }

  const newBook = { id: nextId++, title, author, year };
  books.push(newBook);

  res.status(201).json(newBook);
});

app.put('/api/books/:id', validateYear, (req, res) => {
  const index = books.findIndex(b => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Book not found' });

  const { title, author, year } = req.body;
  if (!title || !author) return res.status(400).json({ error: 'Title and author required' });

  books[index] = { id: parseInt(req.params.id), title, author, year };
  res.json(books[index]);
});

app.listen(3000);
