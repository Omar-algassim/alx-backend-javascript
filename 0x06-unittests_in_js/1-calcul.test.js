#!/usr/bin/node
const assert = require('assert');
const calculateNumber = require('./1-calcul.js')

describe('calculateNumber', function() {
  describe("#SUM", function () {
    it('shuold be rounded and added', function() {
    assert.equal(calculateNumber('SUM', 1.6, 1), 3);
  })
  it('test regular number added', function() {
    assert.equal(calculateNumber('SUM', 1, 1), 2);
  })
  it('rounded 0.5 and added', function() {
    assert.equal(calculateNumber('SUM', 1.5, 1.5), 4);
  })
  it('rounded under 0.5 and added', function() {
    assert.equal(calculateNumber('SUM', 2.3, 1.1), 3);
  })
  it('return the above 0.5 rounded and added', function() {
    assert.equal(calculateNumber('SUM', 2.6, 1.7), 5);
  })
  it('test the type is number', function() {
    const result = calculateNumber('SUM', 1.5, 2.5);
    assert.ok(typeof(result), 'number')
  })
});

  describe('#SUBTRUCT', function() {
    it('shuold be rounded and subtruct', function() {
      assert.equal(calculateNumber('SUBTRACT', 1.6, 1), 1);
    })
    it('test negative number subtructing', function() {
      assert.equal(calculateNumber('SUBTRACT', -1, -1), 0);
    })
    it('test negative number subtructing', function() {
      assert.equal(calculateNumber('SUBTRACT', 0, 1), -1);
    })
    it('rounded 0.5 and subtruct', function() {
      assert.equal(calculateNumber('SUBTRACT', 1.5, 1.5), 0);
    })
    it('subtruct tow negative number should added', function() {
      assert.equal(calculateNumber('SUBTRACT', 3, -1.5), 4);
    })
    it('rounded under 0.5 and subtruct', function() {
      assert.equal(calculateNumber('SUBTRACT', 2.3, 3.1), -1);
    })
    it('return the above 0.5 rounded and subtruct', function() {
      assert.equal(calculateNumber('SUBTRACT', 2.6, 1.7), 1);
    })
    it('test the type of number', function() {
      const result = calculateNumber('SUBTRACT', 1.5, 2.5);
      assert.ok(typeof(result), 'number')
    })
  });

  describe('#DIVISION', function() {
    it('shuold be rounded and divison', function() {
      assert.equal(calculateNumber('DIVIDE', 1.6, 1), 2);
    })
    it('test regular number divison', function() {
      assert.equal(calculateNumber('DIVIDE', 1, 1), 1);
    })
    it('rounded 0.5 and divison negative number', function() {
      assert.equal(calculateNumber('DIVIDE', 5.6, -1.6), -3);
    })
    it('divide tow negative number', function() {
      assert.equal(calculateNumber('DIVIDE', -4, -2.3), 2);
    })
    it('rounded under 0.5 and divison', function() {
      assert.equal(calculateNumber('DIVIDE', 4.3, 2.1), 2);
    })
    it('return the above 0.5 rounded and divison', function() {
      assert.equal(calculateNumber('DIVIDE', 0.0, -5.0), 0);
    })
    it('return the above 0.5 rounded and divison', function() {
      assert.equal(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    })
    it('test divison with zero', function() {
      assert.equal(calculateNumber('DIVIDE', 3.6, 0), 'Error');
    })
    it('test divison with rounded to zero', function() {
      assert.equal(calculateNumber('DIVIDE', 3.6, 0.4), 'Error');
    })
    it('test the type is number', function() {
      const result = calculateNumber('DIVIDE', 1.5, 2.5);
      assert.ok(typeof(result), 'number')
    })
    it('test the type of srting', function() {
      const result = calculateNumber('DIVIDE', 1.5, 0);
      assert.ok(typeof(result), 'string')
    })
  })
});
