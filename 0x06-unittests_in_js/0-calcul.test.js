const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('calculateNumber', () => {
    it('integer numbers', () => {
        assert.equal(calculateNumber(1, 3), 4);
    })
    it('rounded number uo of 0.5 and integer', () => {
        assert.equal(calculateNumber(1, 3.7), 5);
    })
    it('rounded number down of 0.5', () => {
        assert.equal(calculateNumber(1.2, 3.4), 4);
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
