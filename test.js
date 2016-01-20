/* eslint-env mocha */

'use strict'

const assert = require('assert')
const createNamedTuple = require('./')

const Point = createNamedTuple('Point', 'x', 'y')

describe('Named Tuple', function () {
  let p

  before(function () {
    p = new Point(12, 16)
  })

  it('should allow property access', function () {
    assert.equal(p.x, 12)
    assert.equal(p.y, 16)
  })

  it('should be iterable', function () {
    assert.deepEqual([ ...p ], [ 12, 16 ])
  })

  it('should allow listing keys', function () {
    assert.deepEqual(Object.keys(p), [ 'x', 'y' ])
  })

  it('should be immutable', function () {
    assert.throws(() => p.x = 48, TypeError)
    assert.throws(() => p.z = 64, TypeError)
  })

  it('should have beautiful source', function () {
    const actual = Point.toString().split('\n')
    const expected = [
      'class Point {',
      '  constructor (x, y) {',
      '    this.x = x',
      '    this.y = y',
      '    Object.freeze(this)',
      '  }',
      '}'
    ]

    assert.deepEqual(actual, expected)
  })
})
