module.exports = {
  plugins: [
    require('postcss-initial')({
      reset: 'all', // reset only inherited rules
      replace: true
    })
  ]
}
