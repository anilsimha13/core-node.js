# Namaste Node.js

_Node.js is a JavaScript runtime built on Chorme's V8 engine_
_Released on 2009 by Ryan Dahl_

## Table of Content

### Season - 1

- [Episode - 00 | Welcome to Namaste Node.js](#episode---00--welcome-to-namaste-nodejs)
- [Episode - 01 | Introduction to Node.js](#episode---01--introduction-to-nodejs)
- [Episode - 02 | JS on Server](#episode---02--js-on-server)
- [Episode - 03 | Let's write code](#episode---03--lets-write-code)
- [Episode - 04 | module.exports and require](#episode---04--moduleexports-and-require)

#### Episode - 00 | Welcome to Namaste Node.js

_Topics Covered_

- Heart - to - Heart conversation
- Don't get distracted
- Keep much concentration
- Don't use phone
- Be more curious

#### Episode - 01 | Introduction to Node.js

_Topics Covered_

- Node.js (_Run Javascript Everywhere_)
  - Cross-Platform
  - Open source Javascript runtime environment
  - V8 Javascript engine
  - Can execute on outside of the web browser
  - Event-driven architecture
  - Asynchronous I/O
  - Open JS Foundation

#### Episode - 02 | JS on Server

_Topics Covered_

- Node.js
  - Written on C++
  - V8 engine was written on C++
  - V8 can be embedded into any C++ application
  - V8 engine executes the Javascript language
  - High Level(We write these programming language) >> Machine >> Assembly >> Binary code(Computer Understands)

#### Episode - 03 | Let's write code

_Topics Covered_

- Installation of Node.js
  - `node -v`
  - `npm -v`
  - REPL (_Read Evaluate Print Loop_)
    - run `node` in your terminal
- Global Object
  - `window`,`this`,`self`,`frames` in broswer console points to Window object
  - `global` in IDE
  - `console.log(this);//Empty Object` from IDE
  - `globalThis` should give you Window object in IDE and Browsers

#### Episode - 04 | module.exports and require

_Topics Covered_

- `require` keyword is available thru out the node project
- Modules are protectes their variables and functions from leaking

**Common JS Module** (cjs)

- `module.exports = {}` and `const {} = require('./fileName')`
- `module.exports` is an empty object

```js
//sum.js
var d = 10;

function addTwoNumbers(a, b) {
  console.log(a + b);
}

module.exports = { d, addTwoNumbers };
```

```js
//app.js
const { addTwoNumbers } = require("./sum");
const { x, y } = require("./xyz");
console.log("I am from App file");
addTwoNumbers(x, y);
var d = 99;
console.log(d);
```

```js
//xyz.js
console.log("I am from XYZ file");

var x = 10;
var y = 20;

module.exports = { x, y };
```

**ES Modules** (mjs)

- `import` and `export`

```json
//package.json
{
  "type": "module"
}
```

```js
//app.js
import { x, y } from "./xyz.js";
import { d, addTwoNumbers } from "./sum.js";
console.log("I am from App file");
addTwoNumbers(x, y);
console.log(d);
```

```js
//sum.js
export var d = 10;

export function addTwoNumbers(a, b) {
  console.log(a + b);
}
```

```js
//xyz.js
export var x = 10;
export var y = 20;
```
