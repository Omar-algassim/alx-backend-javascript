#!/usr/bin/node
const fs = require('fs');

function countStudents(filename) {
  if (!fs.existsSync(filename)) {
    throw new Error('Cannot load the database');
  } else {
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
    for (const f in field) {
      console.log(`Number of students in ${f}: ${field[f].count}. List: ${field[f].names.join(', ')}`);
    }
}
}
module.exports = countStudents;
