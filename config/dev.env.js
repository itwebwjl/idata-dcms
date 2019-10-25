'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // API_ROOT: '"http://172.20.10.8:8088"',
  API_ROOT: '"http://118.190.199.77:8088"',
})

