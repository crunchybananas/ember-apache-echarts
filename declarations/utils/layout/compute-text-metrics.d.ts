type TextMetrics = {
    height: number;
    width: number;
    fontHeight: number;
    fontSize: number;
    fontFamily: string;
    fontWeight: string;
};
/**
 * Returns the width and height of the `text` when rendered with the `style`.
 *
 * @param {string} text  A string to render as text
 * @param {object} style An object containing CSS properties
 *
 * @return {object} An object specifying the `width` and `height` of the
 *                  rendered text in pixels
 */
declare function computeTextMetrics(text: string, style: TextMetrics): {
    height: number;
    width: number;
    fontHeight: number;
};
export default computeTextMetrics;
//# sourceMappingURL=compute-text-metrics.d.ts.map