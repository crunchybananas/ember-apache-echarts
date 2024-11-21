import mergeAt from './merge-at.js';

/**
 * Merges the values of the `values` object with the `object` at the paths
 * specified by the keys of `values`.
 *
 * For example:
 *
 * ```
 * const object = {
 *   authors: ['Robert Heinlein', 'Anaïs Nin'],
 *   options: {
 *     highlight: ['Anaïs Nin'],
 *     ratings: {
 *       1: 2,
 *       2: 1,
 *       3: 5,
 *       4: 15,
 *       5: 27,
 *     },
 *   },
 * };
 *
 * mergeAtPath(object, {
 *   'authors': ['Terry Pratchett'],
 *   'options.highlight': ['Terry Pratchett'],
 *   'ratings': {
 *     4: 16,
 *   },
 * });
 * ```
 *
 * @param {object}       object The object
 * @param {object|array} value  An object or array of objects that map paths to
 *                              the values to merge in. Array elements are
 *                              appended at the end, and object properties
 *                              override existing properties
 */
function mergeAtPaths(object, values) {
  if (!values) {
    return;
  }
  if (Array.isArray(values)) {
    values.forEach(value => mergeAtPaths(object, value));
  } else {
    Object.keys(values).forEach(path => mergeAt(object, path, values[path]));
  }
}

export { mergeAtPaths as default };
//# sourceMappingURL=merge-at-paths.js.map
