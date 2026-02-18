const express = require('express');
const app = express();

app.use(express.json());

let books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { id: 2, title: '1984', author: 'George Orwell', year: 1949 },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }
];

let nextId = 4;

app.get('/api/books', (req, res) => {
  let filteredBooks = books;
  const { author, year } = req.query;

  if (author) {
    filteredBooks = filteredBooks.filter(b =>
      b.author.toLowerCase().includes(author.toLowerCase())
    );
  }

  if (year) {
    filteredBooks = filteredBooks.filter(b => b.year === parseInt(year));
  }

  res.json(filteredBooks);
});

app.post('/api/books', (req, res) => {
  const { title, author, year } = req.body;
  if (!title || !author || !year) {
    return res.status(400).json({ error: 'Title, author, and year required' });
  }
  const newBook = { id: nextId++, title, author, year };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.get('/api/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
});

app.delete('/api/books/:id', (req, res) => {
  const index = books.findIndex(b => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Book not found' });
  const deleted = books.splice(index, 1);
  res.json({ message: 'Deleted', book: deleted[0] });
});

app.listen(3000, () => console.log("Server running"));
