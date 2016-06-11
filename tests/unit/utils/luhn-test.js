import luhn from '../../../utils/luhn';
import { module, test } from 'qunit';

module('Unit | Utility | luhn');

// Replace this with your real tests.
test('it detects good numbers successfully', function(assert) {
  assert.ok(luhn('4532984447715255'), 'Fake Visa Ok');
  assert.ok(luhn('346226689213217'), 'Fake Amex Ok');
});

test('it detects bad numbers successfully', function(assert) {
  assert.notOk(luhn('5400134368038455'), 'Bad fake MC number is not ok');
});
