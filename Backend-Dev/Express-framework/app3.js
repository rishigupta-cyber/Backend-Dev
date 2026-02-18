const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

/* ---------- Serve static files ---------- */
app.use(express.static(path.join(__dirname, 'public')));

/* ---------- Set EJS view engine ---------- */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* ---------- Gallery Route (Exercise 5) ---------- */
app.get('/', (req, res) => {
  const images = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg'];
  res.render('gallery', { images });
});

/* ---------- Start Server ---------- */
app.listen(PORT, () => {
  console.log(`Photo Gallery running at http://localhost:${PORT}`);
});
