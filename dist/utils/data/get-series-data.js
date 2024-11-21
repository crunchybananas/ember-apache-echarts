import { compact } from 'lodash-es';
import createLookup from '../create-lookup.js';

// @ts-expect-error: remove lodash
/**
 * Returns the data values from the `data` array.
 *
 * @param {object[]} data             An array of data objects
 * @param {string[]} categories       An array of category names
 * @param {string}   categoryProperty The name of the property in each data
 *                                    object that represents the category
 * @param {string}   valueProperty    The name of the property in each data
 *                                    object that represents the value
 *
 * @return {number[]} An array of data values
 */
function getSeriesData(data, categories, categoryProperty, valueProperty) {
  const lookup = createLookup(data, categoryProperty, valueProperty);
  return compact(categories.map(category => lookup[category]));
}

export { getSeriesData as default };
//# sourceMappingURL=get-series-data.js.map
