const getFlagValue = require('./get-flags')
console.log(`Oi ${getFlagValue('--name')}.${getFlagValue('--greeting')}`)

