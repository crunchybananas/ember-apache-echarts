import flatten from 'lodash/flatten';
import transform from 'lodash/transform';

/**
 * Compute the sum of all values in the series in `data` for each category in
 * `categories`.
 *
 * @param {object[]} data             An array of data objects
 * @param {string[]} categories       An array of category names
 * @param {string}   categoryProperty The name of the property in each data
 *                                    object that represents the category
 * @param {string}   valueProperty    The name of the property in each data
 *                                    object that represents the value

 * @return {number[]} An array of the sums for the values for each category
 */
export default function getSeriesTotals(
  data,
  categories,
  categoryProperty,
  valueProperty
) {
  const allData = flatten(data.map((info) => info.data));

  return Object.values(
    transform(
      allData,
      (totals, item) => {
        totals[item?.[categoryProperty]] =
          (totals[item?.[categoryProperty]] ?? 0) +
          (item?.[valueProperty] ?? 0);
      },
      {}
    )
  );
}
