import Ember from 'ember';
import numToType from '../utils/number-to-type';

const { Helper } = Ember;

export let ccNumberToType = numToType;

export default Helper.helper(function(/* params, hash*/) {
  let result = numToType(...arguments);
  return result[0] || '';
});
