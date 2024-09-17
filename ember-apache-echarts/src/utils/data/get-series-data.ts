// @ts-expect-error: remove lodash
import { compact } from 'lodash-es';
import createLookup from '../create-lookup.ts';

type Data = {
  [key: string]: unknown;
};

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
export default function getSeriesData(
  data: Data[],
  categories: string[],
  categoryProperty: string,
  valueProperty: string
) {
  const lookup = createLookup(data, categoryProperty, valueProperty);

  return compact(categories.map((category) => lookup[category]));
}
