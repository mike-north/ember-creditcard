export function ccNumberToType(params, hash) {
  let [num] = params;
  let result = null;
  switch (true) {
    case /^3[47]/.test(num):
      result = ['amex'];
      break;
    case /^(?:62|88)/.test(num):
      result = ['china-unionpay'];
      break;
    case /^30[0-5]/.test(num):
      result = ['dinersclub', 'dinersclub-carteblanche'];
      break;
    case /^(?:30[0-5]|309|36|3[89])/.test(num):
      result = ['dinersclub', 'dinersclub-international'];
      break;
    case /^5[45]/.test(num):
      result = ['dinersclub'];
      break;
    case /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/.test(num):
      result = ['discover'];
      break;
    case /^(?:352[89]|35[345678])/.test(num):
      result = ['jcb'];
      break;
    case /^6(?:304|706|771|709)/.test(num):
      result = ['laser'];
      break;
    case /^(?:5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)/.test(num):
      result = ['maestro'];
      break;
    case /^5019/.test(num):
      result = ['dankort'];
      break;
    case /^5[0-5]/.test(num):
      result = ['mastercard'];
      break;
    case /^(4026|417500|4405|4508|4844|4913|4917)/.test(num):
      result = ['visa', 'visa-electron'];
      break;
    case /^4/.test(num):
      result = ['visa'];
      break;
    default:
      return [];
  }
  let allowedTypes = (hash || {}).allowedTypes || '';
  let allowedTypesArr = allowedTypes ? allowedTypes.split('|') : [];
  if (allowedTypesArr.length > 0) {
    result = result.filter(typ => allowedTypesArr.indexOf(typ) >= 0);
  }
  return result;
}

export default ccNumberToType;
