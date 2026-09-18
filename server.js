// Express web server for CSE341-FALL2026
// Import express using ESM syntax
import express from 'express';

// Create an instance of an Express application
const app = express();


const name = process.env.NAME;

// Define a route handler for the root URL ('/')
app.get('/', (req, res) => {
    res.send(name);
});

app.get('/hannah', (req, res) => {
    res.send('Hannah Birch');
});


// Define the port number the server will listen on
const PORT = 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});