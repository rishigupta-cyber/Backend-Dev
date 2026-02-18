const express = require('express');
const app = express();

app.use(express.json());

let authors = [
  { id: 1, name: 'Author One', country: 'USA' },
  { id: 2, name: 'Author Two', country: 'UK' }
];

let nextId = 3;

app.post('/api/authors', (req, res) => {
  const { name, country } = req.body;
  if (!name || !country) return res.status(400).json({ error: 'Invalid data' });
  const newAuthor = { id: nextId++, name, country };
  authors.push(newAuthor);
  res.status(201).json(newAuthor);
});

app.get('/api/authors', (req, res) => {
  res.json(authors);
});

app.get('/api/authors/:id', (req, res) => {
  const author = authors.find(a => a.id === parseInt(req.params.id));
  if (!author) return res.status(404).json({ error: 'Not found' });
  res.json(author);
});

app.put('/api/authors/:id', (req, res) => {
  const index = authors.findIndex(a => a.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Not found' });
  const { name, country } = req.body;
  if (!name || !country) return res.status(400).json({ error: 'Invalid data' });
  authors[index] = { id: parseInt(req.params.id), name, country };
  res.json(authors[index]);
});

app.delete('/api/authors/:id', (req, res) => {
  const index = authors.findIndex(a => a.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Not found' });
  const deleted = authors.splice(index, 1);
  res.json(deleted[0]);
});

app.listen(3000);
