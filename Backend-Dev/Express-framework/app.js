const express = require('express');
const app = express();
const PORT = 3000;

// Sample users data
const users = [
  { id: 1, name: 'Rishi', email: 'rishi@example.com' },
  { id: 2, name: 'Srijan', email: 'srijan@example.com' },
  { id: 3, name: 'Sweta', email: 'sweta@example.com' },
  { id: 4, name: 'Subrat', email: 'subrat@example.com' }
];

/*
Route with query parameter filtering
Example:
http://localhost:3000/users?name=ali
*/
app.get('/users', (req, res) => {
  const nameQuery = req.query.name;

  // If no query → return all users
  if (!nameQuery) {
    return res.json(users);
  }

  // Filter users by name (case-insensitive)
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(nameQuery.toLowerCase())
  );

  res.json(filteredUsers);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
