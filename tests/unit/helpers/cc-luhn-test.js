import { ccLuhn } from '../../../helpers/cc-luhn';
import { module, test } from 'qunit';

module('Unit | Helper | cc luhn');

// Replace this with your real tests.
test('it works', function(assert) {
  assert.ok(ccLuhn(['2222222']));
  assert.ok(!ccLuhn(['1']));
});
