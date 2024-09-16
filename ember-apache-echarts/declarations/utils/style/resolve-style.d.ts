export default resolveStyle;
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
declare function resolveStyle(style: object, context: object): object;
//# sourceMappingURL=resolve-style.d.ts.map