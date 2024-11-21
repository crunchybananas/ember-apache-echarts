import { kebabCase } from 'lodash-es';

// @ts-expect-error: remove lodash
const pixelProperties = ['margin', 'padding', 'borderWidth', 'borderTopWidth', 'borderBottomWidth', 'borderLeftWidth', 'borderRightWidth', 'borderRadius', 'borderTopRadius', 'borderBottomRadius', 'borderLeftRadius', 'borderRightRadius'];
const addPixelsToValue = (key, value) => typeof value === 'number' && pixelProperties.find(property => key.startsWith(property)) ? `${value}px` : value;

/**
 * Converts an object into a CSS style string.
 *
 * @param {object} style An object containing CSS properties
 *
 * @return {string} A string representation of the CSS properties suitable for a
 *                  `style` attribute
 */
const formatCssStyleValue = style => Object.keys(style).reduce(
// @ts-expect-error: not sure
(styleValue, key) => styleValue + `${kebabCase(key)}: ${addPixelsToValue(key, style[key])}; `, '');

export { formatCssStyleValue as default };
//# sourceMappingURL=format-css-style-value.js.map
