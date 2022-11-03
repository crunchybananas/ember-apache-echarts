import omit from 'lodash/omit';
import getUniqueDatasetValues from './get-unique-dataset-values';

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
const rotateDataSeries = (data, categoryProperty, valueProperty) =>
  getUniqueDatasetValues(data, categoryProperty).map((label) => ({
    label,
    data: data.map((series) => {
      const item = series.data.find((item) => item[categoryProperty] === label);

      return !item
        ? undefined
        : {
            [categoryProperty]: series.label,
            [valueProperty]: item[valueProperty],
            ...omit(series, 'data', 'label'),
          };
    }),
  }));

export default rotateDataSeries;
