module.exports = {
  devServer: {
    proxy: {
      '^/room': {
        target: 'http://localhost:8080',
        changeOrigin: true
      },
      '^/sensors': {
        target: 'http://localhost:8080',
        changeOrigin: true
      },
    }
  }
}