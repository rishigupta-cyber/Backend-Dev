const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let posts = [
  { id: 1, title: 'First Post', content: 'This is my first blog post.' },
  { id: 2, title: 'Second Post', content: 'Learning Express is fun!' }
];

app.get('/', (req, res) => {
  res.render('index', { posts });
});

app.get('/post/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));

  if (!post) return res.send('Post not found');

  res.render('post', { post });
});

app.get('/new', (req, res) => {
  res.render('new');
});

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
