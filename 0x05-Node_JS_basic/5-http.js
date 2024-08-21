#!/usr/bin/node
const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';


function countStudents(filename) {
  return new Promise((resolve, rejects) => {
    fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) {
        rejects(new Error('Cannot load the database'));
      }
      if (data) {
        const data = fs.readFileSync(filename);
        let lineList = data.toString().trim().split('\n');
        lineList = lineList.slice(1);
        const parseLine = [];
        const field = {};
        lineList.forEach((line) => {
          if (line) {
            const splitLine = line.split(',');
            parseLine.push(splitLine);
            if (splitLine[3] in field) {
              field[splitLine[3]].names.push(splitLine[0]);
              field[splitLine[3]].count += 1;
            } else {
              field[splitLine[3]] = { names: [splitLine[0]], count: 1 };
            }
          }
        });
        const studentNUmber = parseLine.length;
        console.log(`Number of students: ${studentNUmber}`);
        // eslint-disable-next-line guard-for-in
        for (const f in field) {
          console.log(`Number of students in ${f}: ${field[f].count}. List: ${field[f].names.join(', ')}`);
        }
        resolve(true);
      }
    });
  });
}

const SERVER_ROUTE_HANDLERS = [
  {
    route: '/',
    handler(_, res) {
      const responseText = 'Hello Holberton School!';

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    },
  },
  {
    route: '/students',
    handler(_, res) {
      const responseParts = ['This is the list of our students'];

      countStudents(DB_FILE)
        .then((report) => {
          responseParts.push(report);
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        })
        .catch((err) => {
          responseParts.push(err instanceof Error ? err.message : err.toString());
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        });
    },
  },
];

app.on('request', (req, res) => {
  for (const routeHandler of SERVER_ROUTE_HANDLERS) {
    if (routeHandler.route === req.url) {
      routeHandler.handler(req, res);
      break;
    }
  }
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
