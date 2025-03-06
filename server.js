
const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the website directory
app.use(express.static(path.join(__dirname, 'webpage')));

// Serve the React app's static files from the dist directory
app.use('/app', express.static(path.join(__dirname, 'webapp/dist')));

// For any routes that start with /app, serve the React app's index.html
// This is critical for client-side routing in the React app
app.get('/app/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'webapp/dist/index.html'));
});

// For all other routes, serve the website's index.html
app.get('*', (req, res) => {
  // Skip if the request is for /app
  if (req.path.startsWith('/app')) {
    return; // Let the above handler take care of /app routes
  }
  
  res.sendFile(path.join(__dirname, 'webpage/index.html'));
});

// Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`React app available at http://localhost:${PORT}/app`);
});
