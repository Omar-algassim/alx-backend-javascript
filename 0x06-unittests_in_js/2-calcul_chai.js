#!/usr/bin/node
/*
When type is SUM, round the two numbers, and add a and b
When type is SUBTRACT, round the two numbers, and subtract b from a
When type is DIVIDE, round the two numbers, and divide a with b -
if the rounded value of b is equal to 0, return the string Error
*/

function calculateNumber(type, a, b) {
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);
    const calculate = {
        SUM: function (a, b) {
            return a + b;
        },
        SUBTRACT: function(a, b) {
            return a - b;
        },
        DIVIDE: function(a, b) {
            if (b === 0) {
                return "Error";
            }
            return a / b;
        }
    }
    if (calculate[type] === undefined) {
        return 0;
    }
    const operation = calculate[type];
    return operation(roundedA, roundedB);
  }
  
export default calculateNumber;
