const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  const startTime = Date.now(); 

  res.on('finish', () => {
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    console.log(`${req.method} ${req.url} - ${responseTime} ms`);
  });

  next(); 
});

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'Rishi' },
    { id: 2, name: 'Srijan' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
