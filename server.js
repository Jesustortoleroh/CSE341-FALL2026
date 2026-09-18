// Express web server for CSE341-FALL2026
// Import express using ESM syntax
const express = require('express');

// Create an instance of an Express application
const app = express();


// Define the port number the server will listen on
const PORT = 3000;

app.use('/', require('./routes'));

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});