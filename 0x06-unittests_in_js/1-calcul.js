
calculateNumber = function (a, b, type) {
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
};

module.exports = calculateNumber;
