import computeTextMetrics from '../layout/compute-text-metrics';

const stringToMeasure = 'ABCDEFGHIJKLMNOPQRSTUVWYXZabcdefghijklmnopqrstuvwxyz';

/**
 * Computes the height in pixels of the text for a resolved style.
 *
 * @param {object} style A resolved style
 *
 * @return {number} The height of any text rendered using this style in pixels
 */
const computeTextHeight = (style) =>
  computeTextMetrics(stringToMeasure, style).height +
  style.marginTop +
  style.marginBottom +
  style.borderTopWidth +
  style.borderBottomWidth +
  style.paddingTop +
  style.paddingBottom;

export default computeTextHeight;
