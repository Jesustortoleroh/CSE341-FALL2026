// Express web server for CSE341-FALL2026
// Import express using ESM syntax
const express = require('express');

// Create an instance of an Express application
const app = express();
const lesson1Controllers = require('./controllers/lesson1.js').default;


app.get('/', lesson1Controllers.emilyRoute);
app.get('/hannah', lesson1Controllers.hannahRoute);


// Define the port number the server will listen on
const PORT = 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});