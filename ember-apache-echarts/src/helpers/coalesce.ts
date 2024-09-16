import { helper } from '@ember/component/helper';

/**
 * Returns the first non-null defined value from the positional parameters, or
 * `undefined` if no non-null values were passed in.
 *
 * @param {array} positional - The positional parameters for this function
 *
 * @return {any} The first non-null defined element of `positional` or
 *               `undefined` if all the elements are null or undefined
 */
export default helper(function coalesce(positional) {
  return positional.find((param) => param != null);
});
