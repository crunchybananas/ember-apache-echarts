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
export default function mergeAt(object: object, path: string, value: object | any[]): void;
//# sourceMappingURL=merge-at.d.ts.map