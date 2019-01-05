const { is, tryCatch } = require('@magic/test')

const BABEL = require('../src/index.js')

const config = {
  ENV: 'development',
}

const buffer = 'console.log("ohai")'
const expect = r => r.includes('console.log("ohai");')

// const invalidBuffer = 'console.log(nonexistent.deep.object)'

module.exports = [
  { fn: () => BABEL, expect: is.fn, info: 'BABEL is a function' },
  { fn: BABEL({ buffer, config, name: 'test' }), expect, info: 'BABEL can transpile' },
  {
    fn: BABEL({ config, name: 'test' }),
    expect: b => is.error(b) && b.toString().includes('{ buffer }'),
    info: 'Calling BABEL without a buffer returns correct error',
  },
  {
    fn: BABEL({ buffer: 'test', name: 'test' }),
    expect: b => is.error(b) && b.toString().includes('{ config }'),
    info: 'Calling BABEL without config returns correct error',
  },
  {
    fn: BABEL({ buffer: 'test', config }),
    expect: b => is.error(b) && b.toString().includes('{ name }'),
    info: 'Calling BABEL without name returns correct error',
  },
]
