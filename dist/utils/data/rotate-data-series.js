import { omit } from 'lodash-es';
import getUniqueDatasetValues from './get-unique-dataset-values.js';

// @ts-expect-error: remove lodash

/**
 * Rotates the data series so the data elements in each series become series
 * themselves and the data series become elements within those series.
 *
 * Essentially, if `data` represents a 2-dimensional data set with rows and
 * columns that has been rendered into a hierarchy where each row is a series
 * and the data within each series are the columns in those rows, this swaps the
 * rows for the columns.
 *
 * @param {object[]} data             An array of data objects
 * @param {string}   categoryProperty The name of the property in each data
 *                                    object that represents the category
 * @param {string}   valueProperty    The name of the property in each data
 *                                    object that represents the value
 *
 * @return {object[]} data An array of data objects
 */
// @ts-expect-error: not sure
const rotateDataSeries = (data, categoryProperty, valueProperty) => getUniqueDatasetValues(data, categoryProperty).map(label => ({
  label,
  // @ts-expect-error: not sure
  data: data.map(series => {
    // @ts-expect-error: not sure
    const item = series.data.find(item => item[categoryProperty] === label);
    return !item ? undefined : {
      [categoryProperty]: series.label,
      [valueProperty]: item[valueProperty],
      ...omit(series, 'data', 'label')
    };
  })
}));

export { rotateDataSeries as default };
//# sourceMappingURL=rotate-data-series.js.map
