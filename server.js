/**
 * @file server.js
 * 
 * This file is the main entry point for an Express-based web server. It serves static files
 * (such as CSS, JavaScript, and images) and handles routing to HTML pages, including the 
 * homepage and a specific page for the "Model Y".
 * 
 * The server listens on port 3000 and routes incoming requests to the appropriate 
 * static files or HTML pages. This setup makes use of Node.js and the Express framework.
 * 
 * @requires express - Express framework to handle HTTP requests and server-side logic.
 * @requires path - Node.js module to work with file and directory paths.
 * 
 * @version 0.2
 * @author BenjiRMZ
 * @license MIT
 */

const express = require('express'); // Express framework for building the server
const path = require('path'); // Node.js the module for handling file paths

const app = express(); // Initializes the Express app
const port = 3000; // Port the server will listen on

/**
 * Middleware to serve static files such as CSS, JavaScript, and images.
 * 
 * @function
 * @param {string} __dirname - The directory name of the current module.
 * Serves files located in the root directory (where the server is running).
 */
app.use(express.static(path.join(__dirname)));

/**
 * Route for the homepage.
 * 
 * @function
 * @name get/
 * @memberof express.Router
 * @param {string} path - The root path for the homepage ('/').
 * @param {function} callback - A callback function that sends the `index.html` file.
 * @return {HTML} Sends the `index.html` file to the client as the homepage.
 */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

/**
 * Route for the Model Y page.
 * 
 * @function
 * @name get/model-y
 * @memberof express.Router
 * @param {string} path - The path for the Model Y page ('/model-y').
 * @param {function} callback - A callback function that sends the `model-y.html` file.
 * @return {HTML} Sends the `model-y.html` file to the client.
 */
app.get('/model-y', (req, res) => {
    res.sendFile(path.join(__dirname, 'model-y.html'));
});

/**
 * Start the server and listen on the specified port (3000).
 * 
 * @function
 * @param {number} port - The port the server will listen on.
 * @return {void} Logs a message indicating that the server is running and provides the URL.
 */
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
