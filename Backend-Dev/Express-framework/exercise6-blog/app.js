const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Set EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// In-memory blog data
let posts = [
  { id: 1, title: 'First Post', content: 'This is my first blog post.' },
  { id: 2, title: 'Second Post', content: 'Learning Express is fun!' }
];

/* ---------- List all posts ---------- */
app.get('/', (req, res) => {
  res.render('index', { posts });
});

/* ---------- View single post ---------- */
app.get('/post/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));

  if (!post) return res.send('Post not found');

  res.render('post', { post });
});

/* ---------- Show form to create post ---------- */
app.get('/new', (req, res) => {
  res.render('new');
});

/* ---------- Handle new post submission ---------- */
app.post('/new', (req, res) => {
  const { title, content } = req.body;

  const newPost = {
    id: posts.length + 1,
    title,
    content
  };

  posts.push(newPost);
  res.redirect('/');
});

/* ---------- Start server ---------- */
app.listen(PORT, () => {
  console.log(`Blog running at http://localhost:${PORT}`);
});
