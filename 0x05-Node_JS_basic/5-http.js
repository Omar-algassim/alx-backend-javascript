#!/usr/bin/node
const fs = require('fs');

async function countStudents(paht) {
  return new Promise((resolve, reject) => {
    try {
      const data = fs.readFileSync(paht, { encoding: 'utf8' });
      const splitLines = data.split('\n').filter((line) => line.length > 0);
      const numberOfStudents = splitLines.length - 1;
      const studentField = {};
      for (let i = 1; i < splitLines.length; i += 1) {
        const data = splitLines[i].split(',');
        if (data[3] in studentField) {
          studentField[data[3]].push(data[0]);
        } else {
          studentField[data[3]] = [data[0]];
        }
      }
      let output = `Number of students: ${numberOfStudents}\n`;
      for (const key in studentField) {
        if (Object.prototype.hasOwnProperty.call(studentField, key)) {
          output += `Number of students in ${key}: ${studentField[key].length}. List: ${studentField[key].join(', ')}\n`;
        }
      }
      resolve(output);
    } catch (error) {
      reject(new Error('Cannot load the database'));
    }
  });
}

const http = require('http');

const host = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    countStudents(process.argv[2].toString()).then((data) => {
      res.write('This is the list of our students\n');
      res.end(data);
    }).catch((error) => {
      res.statusCode = 404;
      res.end(error.messag);
    });
  }
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

module.exports = app;
