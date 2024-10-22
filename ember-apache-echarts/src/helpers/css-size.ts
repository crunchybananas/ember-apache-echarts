import { helper } from '@ember/component/helper';

const numberRegEx = /^\d+$/;

const isNumeric = (value: unknown): boolean =>
  typeof value === 'number' || (typeof value === 'string' && value.match(numberRegEx) != null);

/**
 * Formats a value so it can be used as a size in CSS expressions. Automatically
 * uses `px` as the unit for nummeric values.
 */
export default helper(function cssSize(positional: [string?, string?]): string {
  const size = positional[0] != null && positional[0] !== '' ? positional[0] : positional[1];

  return isNumeric(size) || size === ''
    ? size?.toString() !== '0'
      ? `${size}px`
      : '0'
    : (size ?? '0');
});
