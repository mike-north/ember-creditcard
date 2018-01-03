import Helper from '@ember/component/helper';
import numToType from '../utils/number-to-type';

export let ccNumberToType = numToType;

export default Helper.helper(function(/* params, hash*/) {
  let result = numToType(...arguments);
  return result[0] || '';
});
