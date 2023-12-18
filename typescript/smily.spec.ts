import assert from 'assert'
import { countSmilyFace } from './smily'

assert.deepEqual(countSmilyFace([':)', ';(', ';}', ':-D']), 2)
assert.deepEqual(countSmilyFace([';D', ':-(', ':-)', ';~)']), 3)
assert.deepEqual(countSmilyFace([';]', ':[', ';*', ':$', ';-D']), 1)