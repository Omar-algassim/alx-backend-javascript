#!/usr/bin/node
import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js'


describe('calculateNumber', function() {
  describe("#SUM", function () {
    it('shuold be rounded and added', function() {
    expect(calculateNumber('SUM', 1.6, 1), 3);
  })
  it('test regular number added', function() {
    expect(calculateNumber('SUM', 1, 1)).to.equal(2);
  })
  it('rounded 0.5 and added', function() {
    expect(calculateNumber('SUM', 1.5, 1.5)).to.equal(4);
  })
  it('rounded under 0.5 and added', function() {
    expect(calculateNumber('SUM', 2.3, 1.1)).to.equal(3);
  })
  it('return the above 0.5 rounded and added', function() {
    expect(calculateNumber('SUM', 2.6, 1.7)).to.equal(5);
  })
  it('test the type is number', function() {
    const result = calculateNumber('SUM', 1.5, 2.5);
    expect(typeof(result)).to.equal('number');
  })
});

  describe('#SUBTRUCT', function() {
    it('shuold be rounded and subtruct', function() {
      expect(calculateNumber('SUBTRACT', 1.6, 1)).to.equal(1);
    })
    it('test negative number subtructing', function() {
      expect(calculateNumber('SUBTRACT', -1, -1)).to.equal(0);
    })
    it('test negative number subtructing', function() {
      expect(calculateNumber('SUBTRACT', 0, 1)).to.equal(-1);
    })
    it('rounded 0.5 and subtruct', function() {
      expect(calculateNumber('SUBTRACT', 1.5, 1.5)).to.equal(0);
    })
    it('subtruct tow negative number should added', function() {
      expect(calculateNumber('SUBTRACT', 3, -1.5)).to.equal(4);
    })
    it('rounded under 0.5 and subtruct', function() {
      expect(calculateNumber('SUBTRACT', 2.3, 3.1)).to.equal(-1);
    })
    it('return the above 0.5 rounded and subtruct', function() {
      expect(calculateNumber('SUBTRACT', 2.6, 1.7)).to.equal(1);
    })
    it('test the type of number', function() {
      const result = calculateNumber('SUBTRACT', 1.5, 2.5);
      expect(typeof(result)).to.equal('number');
    })
  });

  describe('#DIVISION', function() {
    it('shuold be rounded and divison', function() {
      expect(calculateNumber('DIVIDE', 1.6, 1)).to.equal(2);
    })
    it('test regular number divison', function() {
      expect(calculateNumber('DIVIDE', 1, 1)).to.equal(1);
    })
    it('rounded 0.5 and divison negative number', function() {
      expect(calculateNumber('DIVIDE', 5.6, -1.6)).to.equal(-3);
    })
    it('divide tow negative number', function() {
      expect(calculateNumber('DIVIDE', -4, -2.3)).to.equal(2);
    })
    it('rounded under 0.5 and divison', function() {
      expect(calculateNumber('DIVIDE', 4.3, 2.1)).to.equal(2);
    })
    it('return the above 0.5 rounded and divison', function() {
      expect(calculateNumber('DIVIDE', 0.0, -5.0)).to.equal(0);
    })
    it('return the above 0.5 rounded and divison', function() {
      expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
    })
    it('test divison with zero', function() {
      expect(calculateNumber('DIVIDE', 3.6, 0)).to.equal('Error');
    })
    it('test divison with rounded to zero', function() {
      expect(calculateNumber('DIVIDE', 3.6, 0.4)).to.equal('Error');
    })
    it('test the type is number', function() {
      const result = calculateNumber('DIVIDE', 1.5, 2.5);
      expect(typeof(result)).to.equal('number');
    })
    it('test the type of srting', function() {
      const result = calculateNumber('DIVIDE', 1.5, 0);
      expect(typeof(result)).to.equal('string');
    })
  })
});
