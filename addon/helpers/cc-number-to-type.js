import Ember from 'ember';
import numToType from '../utils/number-to-type';

export let ccNumberToType = numToType;

export default Ember.Helper.helper(function(/*params, hash*/) {
  let result = numToType(...arguments);
  return result[0] || '';
});
