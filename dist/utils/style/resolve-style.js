import { mapValues } from 'lodash-es';
import formatCssStyleValue from './format-css-style-value.js';
import parseCssStyleValue from './parse-css-style-value.js';

// @ts-expect-error: Remove lodash-es
const isPixelDimension = /^-?\d+\.?\d*\px$/;
const isPercentDimension = /^-?\d+\.?\d*%+$/;
function resolvePercentDimension(value, side, context) {
  const rawValue = parseFloat(value.slice(0, -1)) / 100.0;
  return side.endsWith('Top') || side.endsWith('Bottom') ? rawValue * (context?.height ?? 1) : rawValue * (context?.width ?? 1);
}
/**
 * Parses the CSS values in `style` into a style object containing the
 * constituent values for each composite property (e.g., `marginTop` for the
 * `margin` property), then resolves those values using the `context`.
 *
 * Pixel values are resolved to numbers and percent values are resolved using
 * the `width` and * `height` specified in `context` to a float.
 *
 * @param {object} style   An object containing CSS properties
 * @param {object} context An object specifying the `width` and `height` for
 *                         resolving the style
 *
 * @return {object} An object containing the resolved CSS properties
 */
function resolveStyle(style, context) {
  const result = parseCssStyleValue(formatCssStyleValue(style));
  // @ts-expect-error: Can we use normal browser types?
  return mapValues(result, (value, property) => isPixelDimension.test(value) ? parseFloat(value.slice(0, -2)) : isPercentDimension.test(value) ? resolvePercentDimension(value, property, context) : value);
}

export { resolveStyle as default };
//# sourceMappingURL=resolve-style.js.map
