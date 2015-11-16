import luhn from '../../../utils/luhn';
import { module, test } from 'qunit';

module('Unit | Utility | luhn');

// Replace this with your real tests.
test('it works', function(assert) {
  assert.ok(luhn('2222222'));
});
