const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Set EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// GET → show contact form
app.get('/contact', (req, res) => {
  res.render('contact');
});

// POST → handle submitted form
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  res.send(`
    <h2>Form Submitted Successfully</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
    <a href="/contact">Go Back</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
// 404 handler (must be last route)
app.use((req, res) => {
  res.status(404).render('404');
});
