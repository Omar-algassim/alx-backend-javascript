assert.strictEqual(calculateNumber(1.0, 2.0), 3);const calculateNumber = require('./1-calcul.js');
const assert = require('assert');

describe('calculateNumber with type (SUM)', () => {
    it('integer numbers', () => {
        assert.strictEqual(calculateNumber('SUM', 1.0, 2.4), 3);
    })
    it('rounded number under 0.5', () => {
        assert.strictEqual(calculateNumber('SUM', 1.4, 2.4), 3);
    })
    it('rounded number up of 0.5', () => {
        assert.strictEqual(calculateNumber('SUM', 1.4, 2.0), 3);
    })
    it('add zeros', () => {
        assert.strictEqual(calculateNumber('SUM', 1.0, 2.5), 4);
    })
    it('add tow negative', () => {
       assert.strictEqual(calculateNumber('SUM', 2.6, 2.5), 6);
    })
    it('compination of float and integer', () => {
       assert.strictEqual(calculateNumber('SUM', 2.6, 2.0), 5);
    })
    it('fractional number wi', () => {
        assert.strictEqual(calculateNumber('SUM', 2.499999, 3.499999), 5);
    })
});

describe('calculateNumber with type (SUBTRACT)', () => {
    it('integer numbers', () => {
        assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
    })
    it('rounded number under 0.5', () => {
        assert.equal(calculateNumber('SUBTRACT', 1.3, 3.2), -2);
    })
    it('rounded number up of 0.5', () => {
        assert.equal(calculateNumber('SUBTRACT', 3.6, 1.7), 2);
    })
    it('SUBTRACT zeros', () => {
        assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
    })
    it('SUBTRACT tow negative', () => {
        assert.equal(calculateNumber('SUBTRACT', -1, -3), 2);
    })
    it('compination of float and integer', () => {
        assert.equal(calculateNumber('SUBTRACT', 3.5, 1), 3);
    })
    it('no arguments passed', () => {
        assert.equal(calculateNumber(), undefined);
    })
});

describe('calculateNumber with type (DIVIDE)', () => {
    it('integer numbers', () => {
        assert.equal(calculateNumber('DIVIDE', 1, 2), 0.5);
    })
    it('rounded number under 0.5', () => {
        assert.equal(calculateNumber('DIVIDE', 1.3, 2.2), 0.5);
    })
    it('rounded number up of 0.5', () => {
        assert.equal(calculateNumber('DIVIDE', 3.6, 1.7), 2);
    })
    it('divide zeros', () => {
        assert.equal(calculateNumber('DIVIDE', 0, 0), 'Error');
    })
    it('divide tow negative', () => {
        assert.equal(calculateNumber('DIVIDE', -1, -4), 0.25);
    })
    it('compination of float and integer', () => {
        assert.equal(calculateNumber('DIVIDE', 3.5, 1), 4);
    })
    it('no arguments passed', () => {
        assert.equal(calculateNumber(), undefined);
    })
});
