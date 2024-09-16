/**
 * Maps an array of data elements to an array of chart configurations suitable
 * for layout out plots and other data-related elements.
 *
 * The `callback`is called for each element in `array` with
 * `(element, cellInfo, chartInfo, array)` where:
 *
 * `element`
 * : The array element being laid out
 *
 * `chartInfo`
 * : Includes `width`, `height`, `rows` and `columns`
 *
 * `cellInfo`
 * : Includes `width` and `height` of the cell including margin, borders and
 *   padding; `innerWidth` and `innerHeight` of the cell excluding margin,
 *   borders and padding; `x` and `y` location of the cell on the chart,
 *   `row`, `column` and `index` of the cell; and any style information for the
 *   cell (e.g., `marginTop`, `fontFamily`, etc)
 *
 * `array`
 * : The array itself
 *
 * @param {object}   context  The context within which the cells are being laid
 *                            out
 * @param {object[]} array    An array of the data elements being lait out
 * @param {Function} callback The function used to generate the configuration
 *                            for the data element
 *
 * @return {object[]} An array of chart configuration elements
 */
export default function layoutCells(context: object, array: object[], callback: Function): object[];
//# sourceMappingURL=layout-cells.d.ts.map