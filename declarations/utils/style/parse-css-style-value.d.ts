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
declare function parseCssStyleValue(styleString: string): any;
export default parseCssStyleValue;
//# sourceMappingURL=parse-css-style-value.d.ts.map