/**
 * Creates an object lookup from an array.
 *
 * @param {object[]} array         An array of objects
 * @param {string}   keyProperty   The property to use as the key for the
 *                                 lookup. Defaults to `id`
 * @param {string}   valueProperty The property to use as the value. If
 *                                 `undefined`, the entire object is used
 * @param {boolean}  duplicateKeys Whether duplicate keys are allowed. If
 *                                 `true`, then the value of each key will be an
 *                                 array of values
 *
 * @return {object} An object mapping the `keyProperty` to the `valueProperty`
 *                  for all elements in the array. If `duplicateKeys` is set,
 *                  then the value property will be an an array of values.
 */
export default function createLookup(
  // @ts-expect-error: Return to these as I am not sure what the purpose of this is.
  array,
  keyProperty = 'id',
  valueProperty?: string,
  duplicateKeys = false
) {
  return !array
    ? {}
    : // @ts-expect-error: Return to these as I am not sure what the purpose of this is.
      array.reduce((lookup, item) => {
        const key = item[keyProperty];
        const value = valueProperty ? item[valueProperty] : item;

        if (duplicateKeys) {
          lookup[key] = lookup[key] ?? [];
          lookup[key].push(value);
        } else {
          lookup[key] = value;
        }

        return lookup;
      }, {});
}
