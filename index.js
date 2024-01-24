////////////////KONDISI DISIMPAN DALAM TRY & CATCH//////////////

const http = require('http');
const port = 3000;

const member = require('./member.js');
const users = require('./users.js');

const about = {
  status: "Success",
  message: "Response Success",
  description: "Exercise #2",
  date: new Date(),
  data: member
};

const server = http.createServer((req, res) => {
    const path = req.url;

    if (path === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write("<h1>This is the home page</h1>");
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
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.write('404 Not Found bro hehehe salam dari Andreas');
        res.end();
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/ program by Andreas Topuh `);
});


//////////////USING IF BIASA////////////////////////////

// const http = require('http');
// const port = 3000;

// const member = require('./member.js');
// const users = require('./users.js');

// const about = {
//   status: "Success",
//   message: "Response Success",
//   description: "Exercise #2",
//   date: new Date(),
//   data: member
// };

// const server = http.createServer((req, res) => {
//     const path = req.url;

//     if (path === '/') {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         res.write("This is the home page");
//         res.end();
//     } else if (path === '/about') {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.write(JSON.stringify(about));
//         res.end();
//     } else if (path === '/users') {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.write(JSON.stringify(users));
//         res.end();
//     } else {
//         res.statusCode = 404;
//         res.setHeader('Content-Type', 'text/plain');
//         res.write('404 Not Found bro hehehe salam dari Andreas');
//         res.end();
//     } 

// });

// server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/ program by Andreas Topuh `);
// });
