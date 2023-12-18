import assert from 'assert'
import { findOddNumber } from './odd-number'

assert.deepEqual(findOddNumber([7]), 7)
assert.deepEqual(findOddNumber([0]), 0)
assert.deepEqual(findOddNumber([1,1,2]), 2)
assert.deepEqual(findOddNumber([0,1,0,1,0]), 0)
assert.deepEqual(findOddNumber([1,2,2,3,3,3,4,3,3,3,2,2,1]), 4)