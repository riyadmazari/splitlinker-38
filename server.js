const express = require('express');
const path = require('path');

const app = express();

// Serve static files (Main HTML website)
app.use(express.static(path.join(__dirname, 'webpage')));

// Serve React app when "/app" is visited
app.use('/app', express.static(path.join(__dirname, 'webapp', 'dist')));

// Catch-all for React (in case of SPA routing)
app.get('/app/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'webapp', 'dist', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
