#!/usr/bin/node

const Utils = {
    calculateNumber: 
    calculateNumber = function (type, a, b) {
        rondedA = Math.round(a);
        rondedB = Math.round(b);
        if (type === 'SUM') {
            return rondedA + rondedB;
        } else if (type === 'SUBTRACT') {
            return rondedA - rondedB;
        } else if (type === 'DIVIDE') {
            if (rondedB === 0) {
                return 'Error';
            }
            return rondedA / rondedB;
        }
    }
    
};

module.exports = Utils;
