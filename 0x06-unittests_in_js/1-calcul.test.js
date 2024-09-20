const calculateNumber = require('./1-calcul.js');
const assert = require('assert');

describe('calculateNumber with type (SUM)', () => {
    it('integer numbers', () => {
        assert.equal(calculateNumber(1, 3, 'SUM'), 4);
    })
    it('rounded number under 0.5', () => {
        assert.equal(calculateNumber(1.3, 3.2, 'SUM'), 4);
    })
    it('rounded number up of 0.5', () => {
        assert.equal(calculateNumber(1.6, 3.7, 'SUM'), 6);
    })
    it('add zeros', () => {
        assert.equal(calculateNumber(0, 0, 'SUM'), 0);
    })
    it('add tow negative', () => {
        assert.equal(calculateNumber(-1, -3, 'SUM'), -4);
    })
    it('compination of float and integer', () => {
        assert.equal(calculateNumber(1, 3.3, 'SUM'), 4);
    })
    it('no arguments passed', () => {
        assert.equal(calculateNumber(), undefined);
    })
});

describe('calculateNumber with type (SUBTRACT)', () => {
    it('integer numbers', () => {
        assert.equal(calculateNumber(1, 3, 'SUBTRACT'), -2);
    })
    it('rounded number under 0.5', () => {
        assert.equal(calculateNumber(1.3, 3.2, 'SUBTRACT'), -2);
    })
    it('rounded number up of 0.5', () => {
        assert.equal(calculateNumber(3.6, 1.7, 'SUBTRACT'), 2);
    })
    it('SUBTRACT zeros', () => {
        assert.equal(calculateNumber(0, 0, 'SUBTRACT'), 0);
    })
    it('SUBTRACT tow negative', () => {
        assert.equal(calculateNumber(-1, -3, 'SUBTRACT'), 2);
    })
    it('compination of float and integer', () => {
        assert.equal(calculateNumber(3.5, 1, 'SUBTRACT'), 3);
    })
    it('no arguments passed', () => {
        assert.equal(calculateNumber(), undefined);
    })
});

describe('calculateNumber with type (DIVIDE)', () => {
    it('integer numbers', () => {
        assert.equal(calculateNumber(1, 2, 'DIVIDE'), 0.5);
    })
    it('rounded number under 0.5', () => {
        assert.equal(calculateNumber(1.3, 2.2, 'DIVIDE'), 0.5);
    })
    it('rounded number up of 0.5', () => {
        assert.equal(calculateNumber(3.6, 1.7, 'DIVIDE'), 2);
    })
    it('divide zeros', () => {
        assert.equal(calculateNumber(0, 0, 'DIVIDE'), 'Error');
    })
    it('divide tow negative', () => {
        assert.equal(calculateNumber(-1, -4, 'DIVIDE'), 0.25);
    })
    it('compination of float and integer', () => {
        assert.equal(calculateNumber(3.5, 1, 'DIVIDE'), 4);
    })
    it('no arguments passed', () => {
        assert.equal(calculateNumber(), undefined);
    })
});
