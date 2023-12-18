const assert = require('assert')
const { countSmilyFace } = require('./smily')

assert.deepEqual(countSmilyFace([':)', ';(', ';}', ':-D']), 2)
assert.deepEqual(countSmilyFace([';D', ':-(', ':-)', ';~)']), 3)
assert.deepEqual(countSmilyFace([';]', ':[', ';*', ':$', ';-D']), 1)