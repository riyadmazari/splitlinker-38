
const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the website directory
app.use(express.static(path.join(__dirname, 'webpage')));

// Serve the React app's static files from the dist directory
app.use('/app', express.static(path.join(__dirname, 'webapp/dist')));

// Routes that should be handled by the React app
// This includes /app, /pay, and /collect paths
app.get(['/app', '/app/*', '/pay/*', '/collect/*'], (req, res) => {
  res.sendFile(path.join(__dirname, 'webapp/dist/index.html'));
});

// For all other routes, serve the website's index.html
app.get('*', (req, res) => {
  // Skip if the request is already handled by the above routes
  if (req.path.startsWith('/app/') || req.path === '/app' || req.path.startsWith('/pay/') || req.path.startsWith('/collect/')) {
    return; // Already handled
  }
  
  res.sendFile(path.join(__dirname, 'webpage/index.html'));
});

// Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`React app available at http://localhost:${PORT}/app`);
  console.log(`Payment routes available at http://localhost:${PORT}/pay/:poolId`);
  console.log(`Collection routes available at http://localhost:${PORT}/collect/:poolId`);
});
