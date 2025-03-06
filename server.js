
const express = require('express');
const path = require('path');

const app = express();

// Serve static files (Main HTML website)
app.use(express.static(path.join(__dirname, 'webpage')));

// Serve React app when "/app" is visited
app.use('/app', express.static(path.join(__dirname, 'webapp', 'dist')));

// Catch-all route handler for React app
// This is important for Single Page Applications with client-side routing
app.get('/app/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'webapp', 'dist', 'index.html'));
});

// Default route handler for the main website
app.get('*', (req, res, next) => {
  // Skip this middleware if the request starts with /app
  if (req.path.startsWith('/app')) {
    return next();
  }
  
  res.sendFile(path.join(__dirname, 'webpage', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`React app available at http://localhost:${PORT}/app`);
});
