import { manipulate } from './manipulate'
import assert from 'assert'

assert.deepEqual(manipulate('a'), ['a'])
assert.deepEqual(manipulate('ab'), ['ab', 'ba'])
assert.deepEqual(manipulate('abc'), ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])
assert.deepEqual(manipulate('aabb'), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'])