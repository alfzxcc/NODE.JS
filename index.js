const   express = require('express');
const app = express();
const port = 3000;          

//Serve static files from the 'public' directory
app.use(express.static('public'));


// Define a route for the home page
app.get('/', (req, res) => {
    res.send('Hello, World!');  
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 

app.get('/about', (req, res) => {
    res.send('About Us');  
});

app.use(express.json()); // Middleware to parse JSON bodies

app.post('/submit', (req, res) => {
    const data = req.body; // Access the parsed JSON data
    res.send(`Received: ${JSON.stringify(data)}`);
});

app.use((req, res) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Pass control to the next middleware
});