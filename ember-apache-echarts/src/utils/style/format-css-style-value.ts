// @ts-expect-error: remove lodash
import { kebabCase } from 'lodash-es';

const pixelProperties = [
  'margin',
  'padding',
  'borderWidth',
  'borderTopWidth',
  'borderBottomWidth',
  'borderLeftWidth',
  'borderRightWidth',
  'borderRadius',
  'borderTopRadius',
  'borderBottomRadius',
  'borderLeftRadius',
  'borderRightRadius',
];

const addPixelsToValue = (key: string, value: number | string) =>
  typeof value === 'number' && pixelProperties.find((property) => key.startsWith(property))
    ? `${value}px`
    : value;

/**
 * Converts an object into a CSS style string.
 *
 * @param {object} style An object containing CSS properties
 *
 * @return {string} A string representation of the CSS properties suitable for a
 *                  `style` attribute
 */
const formatCssStyleValue = (style: Record<string, unknown>) =>
  Object.keys(style).reduce(
    // @ts-expect-error: not sure
    (styleValue, key) => styleValue + `${kebabCase(key)}: ${addPixelsToValue(key, style[key])}; `,
    ''
  );

export default formatCssStyleValue;
