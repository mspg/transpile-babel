#### @mspg/transpile-babel

[![Greenkeeper badge](https://badges.greenkeeper.io/mspg/transpile-babel.svg)](https://greenkeeper.io/)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]

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

[npm-image]: https://img.shields.io/npm/v/@mspg/transpile-babel.svg
[npm-url]: https://www.npmjs.com/package/@mspg/transpile-babel
[travis-image]: https://travis-ci.org/mspg/transpile-babel.svg?branch=master
[travis-url]: https://travis-ci.org/mspg/transpile-babel
[appveyor-image]: https://ci.appveyor.com/api/projects/status/9csdoh6iwxnj113m?svg=true
[appveyor-url]: https://ci.appveyor.com/project/jaeh/transpile-babel/branch/master
[coveralls-image]: https://coveralls.io/repos/github/mspg/transpile-babel/badge.svg
[coveralls-url]: https://coveralls.io/github/mspg/transpile-babel
