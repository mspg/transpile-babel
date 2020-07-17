import babel from '@babel/core'

const isProd = process.env.NODE_ENV === 'production'

const presets = [
  [
    '@babel/preset-env',
    {
      targets: '>0.25%, not dead',
      // useBuiltIns: 'entry',
      forceAllTransforms: true,
      ignoreBrowserslistConfig: true,
      modules: false,
      debug: !isProd,
    },
  ],
]

const plugins = ['@babel/plugin-transform-arrow-functions']
if (isProd) {
  plugins.push('minify-mangle-names')
  plugins.push('minify-dead-code-elimination')
}

const defaultConfig = {
  sourceMap: isProd ? false : 'both',
  comments: !isProd,
  minified: isProd,
  configFile: false,
  presets,
  plugins,
}

export const BABEL = (args = {}) => {
  try {
    const { buffer, name, config } = args
    if (!buffer) {
      throw new Error('BABEL expects args to include { buffer }')
    }
    if (!name) {
      throw new Error('BABEL expects args to include { name }')
    }
    if (!config) {
      throw new Error('BABEL expects args to include { config }')
    }

    config.basedir = config.HTML_DIR
    const babelOptions = { ...defaultConfig, ...config.BABEL, filename: name }

    const { code } = babel.transform(buffer, babelOptions)
    return code
  } catch (e) {
    return e
  }
}

export default BABEL
