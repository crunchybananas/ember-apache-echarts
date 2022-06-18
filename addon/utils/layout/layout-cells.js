import pickBy from 'lodash/pickBy';
import resolveStyle from 'tio-admin/utils/style/resolve-style';

/**
 * Computes layout information about the chart.
 *
 * @param {object}   context An object describing the layout context (size &
 *                           args) for the chart
 * @param {object[]} array   An array of objects for each plot
 *
 * @return {object} An object containing the chart layout info
 */
function computeChartLayoutInfo(context, array) {
  const { maxColumns } = context.args;
  const cellCount = array.length;
  const columns = maxColumns ? Math.min(cellCount, maxColumns) : cellCount;
  const rows = Math.ceil(cellCount / columns);

  return {
    width: context.layout.width,
    height: context.layout.height,
    rows,
    columns,
  };
}

/**
 * Computes information about individual cells within the chart when laying out
 * multiple plots within a chart.
 *
 * @param {object} context An object describing the layout context (styles) for
 *                         the chart
 * @param {object} chart   The chart layout info
 *
 * @return {object} An object containing the cell layout info
 */
function computeCellLayoutInfo(context, chart) {
  // Includes margin, border and padding
  let layoutSize = {
    width: chart.width / chart.columns,
    height: chart.height / chart.rows,
  };

  const cell = {
    ...layoutSize,
    ...resolveStyle(context.styles.cell, layoutSize),
  };

  // Includes only padding now
  layoutSize = {
    width:
      layoutSize.width -
      cell.marginLeft -
      cell.marginRight -
      cell.borderLeftWidth -
      cell.borderRightWidth,
    height:
      layoutSize.height -
      cell.marginTop -
      cell.marginBottom -
      cell.borderTopWidth -
      cell.borderBottomWidth,
  };

  Object.assign(
    cell,
    pickBy(resolveStyle(context.styles.cell, layoutSize), (value, key) =>
      key.startsWith('padding')
    )
  );

  // Store the dimensions inside of the padding
  cell.innerWidth = layoutSize.width - cell.paddingLeft - cell.paddingRight;
  cell.innerHeight = layoutSize.height - cell.paddingTop - cell.paddingBottom;

  return cell;
}

/**
 * Computes information about the chart and individual cells within the chart
 * when laying out multiple plots within a chart.
 *
 * @param {object}   context An object describing the layout context (size, args
 *                           and styles) for the chart
 * @param {object[]} array   An array of configuration objects for each plot
 *
 * @return {object} An object containing `chart` and `cell` keys which provide
 *                  layout information for these aspects of the layout
 */
function computeLayoutInfo(context, array) {
  const chart = computeChartLayoutInfo(context, array);
  const cell = computeCellLayoutInfo(context, chart);

  return {
    chart,
    cell,
  };
}

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
export default function layoutCells(context, array, callback) {
  const layoutInfo = computeLayoutInfo(context, array);

  return array.map((element, index) => {
    const column = index % layoutInfo.chart.columns;
    const row = Math.floor(index / layoutInfo.chart.columns);
    const x = context.layout.x + layoutInfo.cell.width * column;
    const y = context.layout.y + layoutInfo.cell.height * row;

    return callback(
      element,
      {
        ...layoutInfo.cell,
        row,
        column,
        index,
        x,
        y,
        innerX:
          x +
          layoutInfo.cell.marginLeft +
          layoutInfo.cell.borderLeftWidth +
          layoutInfo.cell.paddingLeft,
        innerY:
          y +
          layoutInfo.cell.marginTop +
          layoutInfo.cell.borderTopWidth +
          layoutInfo.cell.paddingTop,
      },
      layoutInfo.chart,
      array
    );
  });
}
