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
      it('test regular number subtructing', function() {
        assert.equal(calculateNumber('SUBTRACT', 1, 1), 0);
      })
      it('rounded 0.5 and subtruct', function() {
        assert.equal(calculateNumber('SUBTRACT', 1.5, 1.5), 0);
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
      assert.equal(calculateNumber('DIVIDE', 1.6, 1), 0.5);
    })
    it('test regular number divison', function() {
        assert.equal(calculateNumber('DIVIDE', 1, 1), 1);
    })
    it('rounded 0.5 and divison', function() {
      assert.equal(calculateNumber('DIVIDE', 1.5, 5.6), 3);
    })
    it('rounded under 0.5 and divison', function() {
        assert.equal(calculateNumber('DIVIDE', 2.3, 4), 2);
    })
    it('return the above 0.5 rounded and divison', function() {
        assert.equal(calculateNumber('DIVIDE', 3.6, 1.7), 0.5);
    })
    it('return the above 0.5 rounded and divison', function() {
        assert.equal(calculateNumber('DIVIDE', 3.6, 0), 'Error');
    })
    it('test the type of number', function() {
      const result = calculateNumber('DIVIDE', 1.5, 2.5);
        assert.ok(typeof(result), 'number')
    })
    it('test the type of number', function() {
      const result = calculateNumber('DIVIDE', 1.5, 0);
        assert.ok(typeof(result), 'string')
    })
  })
});
  