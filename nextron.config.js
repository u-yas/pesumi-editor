module.exports = {
  webpack: (defaultConfig) =>
    Object.assign(defaultConfig, {
      mode: 'development',
      devtool: 'source-map',
      entry: {
        background: './main/background.ts',
        preload: './main/helpers/preload.ts'
      }
    })
}
