#!/usr/bin/node
const { createServer } = require('http');

const hostname = 'localhost';
const port = '1245';

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen((port, hostname), () => {
  console.log(`Server listening at -> http://${hostname}:${port}`)
});

module.exports = app;
