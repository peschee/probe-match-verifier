import { assert, test } from 'vitest';
import { relativeDifference } from '../src/helpers';

test('relativeDifference()', async () => {
  assert.equal(relativeDifference(10, 5), -100);
  assert.equal(relativeDifference(5, 10), 50);
  assert.equal(relativeDifference(2, 10), 80);
});
