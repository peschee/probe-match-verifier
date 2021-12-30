import { assert, test } from 'vitest';

import { relativeDifference, formatNumber, capitalizeFirstLetter } from '../src/util/functions';

test('relativeDifference()', async () => {
  assert.equal(relativeDifference(10, 5), -100);
  assert.equal(relativeDifference(5, 10), 50);
  assert.equal(relativeDifference(2, 10), 80);
});

test('formatNumber()', async () => {
  assert.equal(formatNumber(10), '10.00000');
  assert.equal(formatNumber(10.00001), '10.00001');
  assert.equal(formatNumber(10.000012), '10.00001');
  assert.equal(formatNumber(10.000015), '10.00001');
  assert.equal(formatNumber(10.0000156), '10.00002');
  assert.equal(formatNumber(10.000016), '10.00002');
});

test('capitalizeFirstLetter()', async () => {
  assert.equal(capitalizeFirstLetter('foo'), 'Foo');
  assert.equal(capitalizeFirstLetter('BAR'), 'BAR');
  assert.equal(capitalizeFirstLetter('bAZ'), 'BAZ');
});
