const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname)));

// Route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for Model Y page
app.get('/model-y', (req, res) => {
    res.sendFile(path.join(__dirname, 'model-y.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});