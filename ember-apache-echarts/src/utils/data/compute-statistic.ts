// @ts-expect-error: remove lodash
import { compact } from 'lodash-es';
import getUniqueDatasetValues from './get-unique-dataset-values.ts';

type DataSeries = {
  data: { [key: string]: unknown }[];
};

type Stat = 'min' | 'max';

/**
 * Calculates the `stat` for the `property` within the `dataset`.
 *
 * @param {DataSeries[]} dataset  An array of data series
 * @param {'min'|'max'}  stat     The statistic to calculate
 * @param {string}       property The property specifying the value to use
 *                                within each data series
 *
 * @return {number} The value of the statistic for the dataset
 */
export default function computeStatistic(dataset: DataSeries[], stat: Stat, property = 'value') {
  return Math[stat](...compact(getUniqueDatasetValues(dataset, property)));
}
