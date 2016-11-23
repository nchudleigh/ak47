var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    API_DOMAIN: '"http://localhost:8082"'
    STRIPE_KEY: '"pk_test_FZ6JO9R21xHIXbGCGhkShAMR"'
})
