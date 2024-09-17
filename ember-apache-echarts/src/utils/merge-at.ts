import { get } from 'lodash-es';
import { set } from 'lodash-es';

/**
 * Merges the existing value at `path` within `object` with the `value`, if
 * both are either an object or an array.
 *
 * @param {object}       object The object
 * @param {string}       path   The path to the property to merge
 * @param {object|Array} value  The value to merge in. Array elements are
 *                              appended at the end, and object properties for
 *                              `value` override existing properties
 */
export default function mergeAt(object, path, value) {
  if (!value) {
    return;
  }

  const existingValue = get(object, path);

  if (!existingValue) {
    set(object, path, value);
  } else if (Array.isArray(value) && Array.isArray(existingValue)) {
    set(object, path, [...existingValue, ...value]);
  } else if (typeof value === 'object' && typeof existingValue === 'object') {
    set(object, path, Object.assign({}, existingValue, value));
  } else {
    throw new Error(`The value at ${path} cannot be merged. It must be an object or array.`);
  }
}
