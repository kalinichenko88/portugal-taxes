import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

import { round } from './round';

describe('round', () => {
  test('will round to bigger', () => {
    assert.equal(round(10.3456), 10.35);
  });

  test('will round to lower', () => {
    assert.equal(round(9.1234), 9.12);
  });
});
