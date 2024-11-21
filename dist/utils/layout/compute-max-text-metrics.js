import computeTextMetrics from './compute-text-metrics.js';

/**
 * Returns the width and height required to render each of the strings contained
 * in `array` when rendered with `style`. If `maxWidth` is set, then wraps text
 * that may be longer.
 *
 * @param {string[]} array    An array of strings to render as text
 * @param {object}   style    An object containing CSS properties
 * @param {number}   maxWidth The maximum width to render the text within
 *
 * @return {object} An object specifying the `width` and `height` that is
 *                  sufficient to contain each of the strings in `array` when
 *                  rendered
 */
// @ts-expect-error: not sure
const computeMaxTextMetrics = (array, style, maxWidth) => array.reduce((maxMetrics, text) => {
  const textMetrics = computeTextMetrics(text, style);

  // Wrap at the pixel level--not accurate, but good enough for now
  if (maxWidth && textMetrics.width > maxWidth) {
    const lineCount = Math.ceil(textMetrics.width / maxWidth);

    // Assume 2px between lines
    textMetrics.height = textMetrics.height * lineCount + (lineCount - 1) * 2;
  }
  maxMetrics.width = Math.max(maxMetrics.width, textMetrics.width);
  maxMetrics.height = Math.max(maxMetrics.height, textMetrics.height);
  return maxMetrics;
}, {
  width: 0,
  height: 0
});

export { computeMaxTextMetrics as default };
//# sourceMappingURL=compute-max-text-metrics.js.map
