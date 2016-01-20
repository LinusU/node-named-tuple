# Named Tuple

Named tuples are small immutable data structures which are easy to define and use. Inspiration comes from the [Python collections module][python.collections].

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

Create a new named tuple with the provided class name (`name`) and instance properties (`props`).

[python.collections]: https://docs.python.org/3/library/collections.html#collections.namedtuple
