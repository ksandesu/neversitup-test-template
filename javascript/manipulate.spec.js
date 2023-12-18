const assert = require('assert')
const { manipulate } = require('./manipulate')

assert.deepEqual(manipulate('a'), ['a'])
assert.deepEqual(manipulate('ab'), ['ab', 'ba'])
assert.deepEqual(manipulate('abc'), ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])
assert.deepEqual(manipulate('aabb'), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'])