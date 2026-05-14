const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();

require('./config/db');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Session setup
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  cookie: { maxAge: 1000 * 60 * 60 * 24 } 
}));

app.use('/', require('./routes/authRoutes'));
app.use('/profile', require('./routes/profileRoutes'));
app.use('/portfolio', require('./routes/portfolioRoutes'));
app.use('/dashboard', require('./routes/dashboardRoutes'));

app.get('/', (req, res) => {
  if (req.session.userId) {
    res.redirect('/dashboard');
  } else {
    res.redirect('/login');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running: http://localhost:${PORT}`);
});