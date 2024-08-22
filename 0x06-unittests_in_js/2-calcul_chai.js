#!/usr/bin/node
/*
When type is SUM, round the two numbers, and add a and b
When type is SUBTRACT, round the two numbers, and subtract b from a
When type is DIVIDE, round the two numbers, and divide a with b -
if the const rounded value of b is equal to 0, return the string Error
*/

function calculateNumber(type, a, b) {
    const calculate = {
        SUM: function (a, b) {
            const roundedA = Math.round(a);
            const roundedB = Math.round(b);
            return roundedA + roundedB;
        },
        SUBTRACT: function(a, b) {
            const roundedA = Math.round(a);
            const roundedB = Math.round(b);
            return roundedA - roundedB;
        },
        DIVIDE: function(a, b) {
            const roundedA = Math.round(a);
            const roundedB = Math.round(b);
            if (roundedB === 0) {
                return "Error";
            }
            return roundedA / roundedB;
        }
    }
    if (calculate[type] === undefined) {
        return 0;
    }
    const operation = calculate[type];
    return operation(a, b);
  }
  
  module.exports = calculateNumber;
  