/**
 * Extracts an array of unique values of `property` from `dataset`, where
 * `dataset` is an array of data series. Each series should be an object that
 * contains an `data` property containing an array of data values.
 *
 * @param {DataSeries[]} dataset  An array of data series
 * @param {string}       property The property to extract
 *
 * @return {any[]} An array of unique property values for `property`
 */
export default function getUniqueDatasetValues(dataset, property) {
  const result = new Set();

  for (const series of dataset) {
    for (const item of series.data) {
      result.add(item[property]);
    }
  }

  return Array.from(result.values());
}
