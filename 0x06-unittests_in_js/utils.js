const Utils = {
    calculateNumber(type, a, b) {
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

}

module.exports = Utils;
