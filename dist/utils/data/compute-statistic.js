import { compact } from 'lodash-es';
import getUniqueDatasetValues from './get-unique-dataset-values.js';

// @ts-expect-error: remove lodash
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
function computeStatistic(dataset, stat, property = 'value') {
  return Math[stat](...compact(getUniqueDatasetValues(dataset, property)));
}

export { computeStatistic as default };
//# sourceMappingURL=compute-statistic.js.map
