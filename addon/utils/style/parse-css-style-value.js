import camelCase from 'lodash/camelCase';
import transform from 'lodash/transform';

/**
 * Parses the value of a `style` attribute for a DOM element into an object.
 *
 * @param {string} styleString The CSS style string to parse
 *
 * @return {object} An object mapping CSS properties to their values, including constituent
 *                  properties that may not have been specified in `styleString` (e.g., `fontSize`
 *                  when only `font` was in `styleString`)
 */
function parseCssStyleValue(styleString) {
  const div = document.createElement('div');

  div.setAttribute('style', styleString);

  const keys = Object.keys(div.style)
    .filter((key) => parseInt(key) == key)
    .map((key) => div.style[key]);
  const keysWithValues = keys.filter((key) => div.style[key]);

  return transform(
    keysWithValues,
    (style, key) => (style[camelCase(key)] = div.style[key]),
    {}
  );
}

export default parseCssStyleValue;
