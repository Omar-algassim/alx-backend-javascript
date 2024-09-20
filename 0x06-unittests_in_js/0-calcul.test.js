const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('calculateNumber', () => {
    it('integer numbers', () => {
        assert.equal(calculateNumber(1, 3), 4);
    })
    it('rounded number under 0.5', () => {
        assert.equal(calculateNumber(1.3, 3.2), 4);
    })
    it('rounded number up of 0.5', () => {
        assert.equal(calculateNumber(1.6, 3.7), 6);
    })
    it('add zeros', () => {
        assert.equal(calculateNumber(0, 0), 0);
    })
    it('add tow negative', () => {
        assert.equal(calculateNumber(-1, -3), -4);
    })
    it('compination of float and integer', () => {
        assert.equal(calculateNumber(1, 3.3), 4);
    })
    it('no arguments passed', () => {
        assert.equal(calculateNumber(), NaN);
    })
});
