import { helper } from '@ember/component/helper';

/**
 * Returns the first non-null defined value from the positional parameters, or
 * `undefined` if no non-null values were passed in.
 */
export default helper(function coalesce(positional: unknown[]): unknown {
  return positional.find((param) => param != null);
});
