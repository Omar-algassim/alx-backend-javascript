const calculateNumber = require('./2-calcul_chai');
const chai = require('chai');
const expect = chai.expect;

describe('calculateNumber with type (SUM)', () => {
    it('integer numbers', () => {
        expect(calculateNumber('SUM', 1.0, 2.4)).to.equal(3);
    })
    it('rounded number under 0.5', () => {
        expect(calculateNumber('SUM', 1.4, 2.4)).to.equal(3);
    })
    it('rounded number up of 0.5', () => {
        expect(calculateNumber('SUM', 1.4, 2.0)).to.equal(3);
    })
    it('add zeros', () => {
        expect(calculateNumber('SUM', 1.0, 2.5)).to.equal(4);
    })
    it('add tow negative', () => {
       expect(calculateNumber('SUM', 2.6, 2.5)).to.equal(6);
    })
    it('compination of float and integer', () => {
       expect(calculateNumber('SUM', 2.6, 2.0)).to.equal(5);
    })
    it('fractional number wi', () => {
        expect(calculateNumber('SUM', 2.499999, 3.499999)).to.equal(5);
    })
});

describe('calculateNumber with type (SUBTRACT)', () => {
    it('integer numbers', () => {
        expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    })
    it('rounded number under 0.5', () => {
        expect(calculateNumber('SUBTRACT', 1.3, 3.2)).to.equal(-2);
    })
    it('rounded number up of 0.5', () => {
        expect(calculateNumber('SUBTRACT', 3.6, 1.7)).to.equal(2);
    })
    it('SUBTRACT zeros', () => {
        expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    })
    it('SUBTRACT tow negative', () => {
        expect(calculateNumber('SUBTRACT', -1, -3)).to.equal(2);
    })
    it('compination of float and integer', () => {
        expect(calculateNumber('SUBTRACT', 3.5, 1)).to.equal(3);
    })
    it('no arguments passed', () => {
        expect(calculateNumber()).to.equal(undefined);
    })
});

describe('calculateNumber with type (DIVIDE)', () => {
    it('integer numbers', () => {
        expect(calculateNumber('DIVIDE', 1, 2)).to.equal(0.5);
    })
    it('rounded number under 0.5', () => {
        expect(calculateNumber('DIVIDE', 1.3, 2.2)).to.equal(0.5);
    })
    it('rounded number up of 0.5', () => {
        expect(calculateNumber('DIVIDE', 3.6, 1.7)).to.equal(2);
    })
    it('divide zeros', () => {
        expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
    })
    it('divide tow negative', () => {
        expect(calculateNumber('DIVIDE', -1, -4)).to.equal(0.25);
    })
    it('compination of float and integer', () => {
        expect(calculateNumber('DIVIDE', 3.5, 1)).to.equal(4);
    })
    it('no arguments passed', () => {
        expect(calculateNumber()).to.equal(undefined);
    })
});