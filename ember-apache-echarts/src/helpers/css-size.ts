import { helper } from '@ember/component/helper';

const numberRegEx = /^\d+$/;

const isNumeric = (value) =>
  typeof value === 'number' ||
  (typeof value === 'string' && value.match(numberRegEx) != null);

/**
 * Formats a value so it can be used as a size in CSS expressions. Automatically
 * uses `px` as the unit for nummeric values.
 *
 * @param {array} positional - The positional parameters for this function
 * @param {string|number} positional[0] - The value to format as a CSS size
 * @param {string|number} positional[1] - The default value if the value is null
 *                                        or undefined
 *
 * @return {string} The value formatted as a CSS size
 */
export default helper(function cssSize(positional /*, named*/) {
  const size =
    positional[0] != null && positional[0] !== ''
      ? positional[0]
      : positional[1];

  return isNumeric(size) || size === ''
    ? size.toString() !== '0'
      ? `${size}px`
      : '0'
    : (size ?? '0');
});
