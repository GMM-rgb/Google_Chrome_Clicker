const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all route to serve index.html for SPA compatibility
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
    
// This code is pretty straightforward. We’re creating an Express server that serves static files from the  public  folder.
// We’re also setting up a catch-all route to serve the  index.html  file for SPA compatibility. Finally, we’re starting the server on port 3000.
