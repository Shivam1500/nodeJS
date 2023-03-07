const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const jsonData = fs.readFileSync('api.json', 'utf-8');
    const objData = JSON.parse(jsonData);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === "/") {
        res.end("Hi this is my first node App page");
    } else if (req.url === "/about") {
        res.end(objData[0].name);
    } else {
        res.end("404: Page could not be found");
    }
    // res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});