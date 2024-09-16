export default computeMaxTextMetrics;
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
declare function computeMaxTextMetrics(array: string[], style: object, maxWidth: number): object;
//# sourceMappingURL=compute-max-text-metrics.d.ts.map