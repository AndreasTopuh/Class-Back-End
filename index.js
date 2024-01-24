const http = require('http');
const port = 3000;

const member = require('./member.js');
const users = require('./users.js');

const about = {
    status: "Success",
    message: "Response Success",
    description: "Tugas #2",
    date: new Date(),
    data: member
};

const server = http.createServer((req, res) => {
    const path = req.url;

    try {
        if (path === '/') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.write("This is the home page");
            res.end();
        } else if (path === '/about') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify(about));
            res.end();
        } else if (path === '/users') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify(users));
            res.end();
        }
    } catch (error) {
        // Handle the error by sending a 404 response
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.write('404 Not Found bro hehehe salam dari Andreas');
        res.end();
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/ program by Andreas Topuh `);
});
