import numberToType from '../../../utils/number-to-type';
import { module, test } from 'qunit';

module('Unit | Utility | number to type');

// Replace this with your real tests.
test('it works', function(assert) {
  assert.equal(numberToType(['4'] , { allowedTypes: 'visa|mastercard' }), 'visa', 'Visa detected');
  assert.equal(numberToType(['343'] , { allowedTypes: 'visa|amex|discover' }), 'amex', 'Amex detected');
  assert.equal(numberToType(['3'] , { allowedTypes: 'visa|amex|discover' }).length, 0, 'Unknown type handled');
});
