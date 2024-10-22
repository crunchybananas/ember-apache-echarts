import { omit } from 'lodash-es';
import getUniqueDatasetValues from './get-unique-dataset-values';

interface DataItem {
  [key: string]: any;
}

interface Series {
  label: string;
  data: DataItem[];
}

/**
 * Rotates the data series so the data elements in each series become series
 * themselves and the data series become elements within those series.
 *
 * Essentially, if `data` represents a 2-dimensional data set with rows and
 * columns that has been rendered into a hierarchy where each row is a series
 * and the data within each series are the columns in those rows, this swaps the
 * rows for the columns.
 *
 * @param {Series[]} data             An array of data objects
 * @param {string}   categoryProperty The name of the property in each data
 *                                    object that represents the category
 * @param {string}   valueProperty    The name of the property in each data
 *                                    object that represents the value
 *
 * @return {Series[]} data An array of data objects
 */
const rotateDataSeries = (data: Series[], categoryProperty: string, valueProperty: string): Series[] =>
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
    }).filter(Boolean) as DataItem[],
  }));

export default rotateDataSeries;
