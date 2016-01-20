# Named Tuple

Named tuples are small immutable data structures which are easy to define and use. Inspiration comes from the [Python collections module](https://docs.python.org/3/library/collections.html#collections.namedtuple).

## Installation

```sh
npm install --save named-tuple
```

## Usage

```javascript
const createNamedTuple = require('named-tuple')

const Point = createNamedTuple('Point', 'x', 'y')

const p = new Point(12, 16)

// Property access
p.x // 12
p.y // 16

// Iterator
[ ...p ] // [ 12, 16 ]

// Keys & values
Object.keys(p) // [ 'x', 'y' ]
Object.values(p) // [ 12, 16 ]

// Immutable
p.x = 48 // TypeError: Cannot assign to read only property 'x' of #<Point>
p.z = 64 // TypeError: Can't add property z, object is not extensible

// Beautiful generated source
Point.toString()
// class Point {
//   constructor (x, y) {
//     this.x = x
//     this.y = y
//     Object.freeze(this)
//   }
// }
Point.prototype[Symbol.iterator].toString()
// function* () {
//   yield this.x
//   yield this.y
// }
```

## API

### `createNamedTuple(name, ...props)`

Create a new named tuple with the provided class name (`name`) and instance properties (`props`). Returns the newly defined class.

## Immutability

When instantiating a new instance of a named tuple, the object immediately gets frozen using [`Object.freeze`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze).

> Nothing can be added to or removed from the properties set of a frozen object. Any attempt to do so will fail, either silently or by throwing a [TypeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) exception (most commonly, but not exclusively, when in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)).

## Valid class- and property names

This module should be considered live source scaffolding and it won't do anything to try and validate your class- and property names. An invalid name could result in an error, or worse. Never use user supplied data to create the classes.
