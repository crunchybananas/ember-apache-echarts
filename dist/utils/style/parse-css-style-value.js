import { transform, camelCase } from 'lodash-es';

// @ts-expect-error: Eventually remove lodash-es

/**
 * Parses the value of a `style` attribute for a DOM element into an object.
 *
 * @param {string} styleString The CSS style string to parse
 *
 * @return {object} An object mapping CSS properties to their values, including
 *                  constituent properties that may not have been specified in
 *                  `styleString` (e.g., `fontSize` when only `font` was in
 *                  `styleString`)
 */
function parseCssStyleValue(styleString) {
  const div = document.createElement('div');
  div.setAttribute('style', styleString);
  const keys = Object.keys(div.style)
  // @ts-expect-error: I think this was trying to ensure that only numeric keys are used
  .filter(key => parseInt(key) == key)
  // @ts-expect-error: but if we only want numeric keys, why are we doing this?
  .map(key => div.style[key]);
  const keysWithValues = keys.filter(key => div.style[key]);
  return transform(keysWithValues,
  // @ts-expect-error: Return to this. Seems like a lot of code for a simple transformation
  (style, key) => style[camelCase(key)] = div.style[key], {});
}

export { parseCssStyleValue as default };
//# sourceMappingURL=parse-css-style-value.js.map
