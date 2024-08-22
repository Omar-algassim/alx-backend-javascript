#!/usr/bin/node
const assert = require('assert');
const calculateNumber = require('./0-calcul.js')

describe('calculateNumber', function() {
  it('shuold be rounded', function() {
    assert.equal(calculateNumber(1.6, 1), 3);
  })
  it('test regular number', function() {
      assert.equal(calculateNumber(1, 1), 2);
  })
  it('rounded 0.5', function() {
    assert.equal(calculateNumber(1.5, 1.5), 4);
  })
  it('rounded under 0.5', function() {
      assert.equal(calculateNumber(2.3, 1.1), 3);
  })
  it('return the above 0.5 rounded', function() {
      assert.equal(calculateNumber(2.6, 1.7), 5);
  })
  it('test the type of number', function() {
    const result = calculateNumber(1.5, 2.5);
      assert.ok(typeof(result), 'number')
  })
});
