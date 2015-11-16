/*
 * Luhn algorithm in JavaScript: validate credit card number supplied as string of numbers
 * @author ShirtlessKirk. Copyright (c) 2012.
 * @license WTFPL (http://www.wtfpl.net/txt/copying)
 */
const luhnChk = (function(arr) {
  return function(ccNum) {
    let bit = 1;
    let sum = 0;
    let len = ccNum.length;
    let val = null;

    while (len) {
      val = parseInt(ccNum.charAt(--len), 10);
      sum += (bit ^= 1) ? arr[val] : val;
    }

    return !!(sum && sum % 10 === 0);
  };
}([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]));

export default luhnChk;
