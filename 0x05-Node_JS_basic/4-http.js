#!/usr/bin/node
const http = require('http');

const hostName = '127.0.0.1';
const port = 1245;
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader = {ContentType: 'text/plain'};
  res.write('Hello Holberton School!');
});

app.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}/`);
});

module.exports = app;
