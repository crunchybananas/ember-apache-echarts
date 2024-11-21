import computeTextMetrics from './compute-text-metrics.js';

const stringToMeasure = 'ABCDEFGHIJKLMNOPQRSTUVWYXZabcdefghijklmnopqrstuvwxyz';

/**
 * Computes the height in pixels of the text for a resolved style.
 *
 * @param {object} style A resolved style
 *
 * @return {number} The height of any text rendered using this style in pixels
 */
// @ts-expect-error: not sure
const computeTextHeight = style => computeTextMetrics(stringToMeasure, style).height + style.marginTop + style.marginBottom + style.borderTopWidth + style.borderBottomWidth + style.paddingTop + style.paddingBottom;

export { computeTextHeight as default };
//# sourceMappingURL=compute-text-height.js.map
