const express = require('express');
const app = express();
const PORT = 3000;

const users = [
  { id: 1, name: 'Rishi', email: 'rishi@example.com' },
  { id: 2, name: 'Srijan', email: 'srijan@example.com' },
  { id: 3, name: 'Sweta', email: 'sweta@example.com' },
  { id: 4, name: 'Subrat', email: 'subrat@example.com' }
];


app.get('/users', (req, res) => {
  const nameQuery = req.query.name;

  if (!nameQuery) {
    return res.json(users);
  }

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(nameQuery.toLowerCase())
  );

  res.json(filteredUsers);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
