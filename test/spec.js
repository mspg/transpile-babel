const { is, tryCatch } = require('@magic/test')
//
const BABEL = require('../src/index.js')

const config = {
  CSS_DIR: __dirname,
  ENV: 'development',
}

const buffer = 'console.log("ohai")'
const expect = r => r.indexOf('"use strict";console.log("ohai");') === 0

const invalidBuffer = 'console.log(nonexistent.deep.object)'

module.exports = [
  { fn: () => BABEL, expect: is.fn, info: 'BABEL is a function' },
  { fn: BABEL({ buffer, config }), expect, info: 'BABEL can transpile' },
  {
    fn: tryCatch(BABEL, { config }),
    expect: is.error,
    info: 'Calling BABEL without a buffer errors',
  },
  {
    fn: tryCatch(BABEL),
    expect: is.error,
    info: 'Calling BABEL without config errors',
  },
]
