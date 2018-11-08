const babel = require('babel-core')

const defaultConfig = {
  sourceMap: 'both',
  presets: [
    'minify',
    'env',
    'stage-0',
    [
      'env',
      {
        targets: {
          browsers: ['last 2 versions', 'safari >= 7'],
        },
      },
    ],
  ],
}

const BABEL = ({ buffer, name, config }) => {
  try {
    if (!buffer) {
      throw new Error('BABEL: expect first argument to include { buffer }')
    }

    config.basedir = config.HTML_DIR

    const babelOptions = Object.assign({ filename: name }, config.BABEL, defaultConfig)

    const { code } = babel.transform(buffer, babelOptions)
    return code
  } catch (e) {
    throw e
  }
}

module.exports = BABEL
