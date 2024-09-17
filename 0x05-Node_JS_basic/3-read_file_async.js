#!/usr/bin/node
const fs = require('fs');

async function countStudents(paht) {
  return new Promise((resolve, reject) => {
    try{
      const data = fs.readFileSync(paht, { encoding: 'utf8' });
      const splitLines = data.split('\n').filter((line) => line.length > 0);
      const numberOfStudents = splitLines.length - 1;
      const studentField = {}
      for (let i = 1; i < splitLines.length; i++) {
          const data = splitLines[i].split(',');
          if (data[3] in studentField) {
              studentField[data[3]].push(data[0]);
          }
          else {
              studentField[data[3]] = [data[0]];
          }
      }
      resolve(console.log(`Number of students: ${numberOfStudents}`));
      for (const key in studentField) {
          console.log(`Number of students in ${key}: ${studentField[key].length}. List: ${studentField[key].join(', ')}`);
      }
    }
    catch (error) {
      reject(new Error('Cannot load the database'));
    }
 })
};

module.exports = countStudents;
