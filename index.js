const   express = require('express');
const app = express();
const port = 3000;    



app.use(express.json()); // Middleware to parse JSON bodies

const items = ['Apple', 'Banana', 'Orange']; // Sample data for the API

app.get('/items', (req, res) => {
    res.json(items); // Send the items as a JSON response
});

app.post('/items', (req, res) => {
    const newItem = req.body.item; // Get the new item from the request body
    items.push(newItem); // Add the new item to the array
    res.json(items); // Send the updated list as a JSON response
});


// Define a route for the home page
app.get('/', (req, res) => {
    res.send('Hello, World!');  
});

//Serve static files from the 'public' directory
app.use(express.static('public'));





// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 

app.get('/about', (req, res) => {
    res.send('About Us');  
});



app.post('/submit', (req, res) => {
    const data = req.body; // Access the parsed JSON data
    res.send(`Received: ${JSON.stringify(data)}`);
});

app.use((req, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Pass control to the next middleware
});

app.use((err, req, res, next) => { // Error-handling middleware
    console.error(err.stack);
    res.status(500).send('Something broke!');
});



