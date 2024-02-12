const express = require('express');
const morgan = require('morgan');
const port = 3000;

const member = require('./member.js'); 
const users = require('./users.js'); 
const app = express();

// Middleware
app.use(morgan('dev')); 

app.use((req, res, next) => {
    // Add your middleware logic here
    // For example, you can log the request method and URL
    console.log(`[${req.method}] ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('<h1>This is the home page</h1>');
});

app.get('/about', (req, res) => {
    const about = {
        status: "Success",
        message: "Response Success",
        description: "Exercise #3 menggunakan EXPRESS.JS dan MORGAN",
        date: new Date(),
        data: member
    };
    res.json(about);
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
