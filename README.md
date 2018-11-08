#### mspg-stylus

uses babel to transpile stage 0 ecmascript features into ecmascript 5


##### Usage:
First set up a [mspg](https://github.com/mspg/core) project.

then, in src/config.js
```javascript
  const JS = require('@mspg/transpile-babel')

  module.exports = {
    TRANSPILERS: {
      JS,
    },
  }
```

Every js file in the /src directory will be transpiled separately.
To use libraries just put them into /includes/js and require them from there.
