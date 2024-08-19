#!/usr/bin/node
const fs = require('fs');

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

module.exports = countStudents;
