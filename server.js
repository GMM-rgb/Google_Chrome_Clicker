const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Handle POST requests (example)
app.post('/api/data', (req, res) => {
  // Handle your post request logic here
  res.send('Data received');
});

// Catch-all route to serve index.html for SPA compatibility
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'root/', 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
