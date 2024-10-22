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
export default function createLookup<T, K extends keyof T, V extends keyof T>(
  array: T[],
  keyProperty: K = 'id' as K,
  valueProperty?: V,
  duplicateKeys = false
): Record<string, T[V] | T[V][]> {
  return !array
    ? {}
    : array.reduce((lookup: Record<string, T[V] | T[V][]>, item: T) => {
        const key = item[keyProperty] as unknown as string;
        const value = valueProperty ? item[valueProperty] : item;

        if (duplicateKeys) {
          if (!lookup[key]) {
            lookup[key] = [];
          }
          (lookup[key] as T[V][]).push(value);
        } else {
          lookup[key] = value;
        }

        return lookup;
      }, {});
}
