import { tracked } from '@glimmer/tracking';
import { compact } from 'lodash-es';
import { countBy } from 'lodash-es';
import { flatten } from 'lodash-es';
import * as echarts from 'echarts';
import mergeAtPaths from '../utils/merge-at-paths.ts';
import AbstractChartModifier from './abstract-chart.ts';
import resolveStyle from '../utils/style/resolve-style.ts';
import computeTextMetrics from '../utils/layout/compute-text-metrics.ts';

export default class GraphChartModifier extends AbstractChartModifier {
  @tracked drillPath = [];

  /**
   * Configures the chart with the provided arguments.
   */
  configureChart(args, chart) {
    const { tooltipFormatter, onSelect } = args;
    const { config } = this.buildLayout(args, chart);
    const { data, links } = args;

    chart.setOption({
      ...config,
      tooltip: {
        formatter: tooltipFormatter,
      },
      animationThreshold: 1000, // Threshold to disable animation for large datasets
      layoutAnimation: false,
      series: [
        {
          type: 'graph',
          layout: 'force',
          animation: false,
          data,
          links,

          roam: true,
          symbol: 'rect', // Use rectangle nodes,
          symbolKeepAspect: true, // Keep aspect ratio of rectangle
          symbolSize: [150, 60], // Node size (rectangle)

          edgeSymbol: ['none', 'arrow'], // Add arrows
          edgeShape: 'polyline',
          label: {
            show: true,
            position: 'top', // Keep label inside the rectangle
            color: '#000',
          },
          force: {
            repulsion: 600, // Space nodes apart
            gravity: 0.01, // Control the grouping of nodes
            edgeLength: [200, 350], // Distance between connected nodes
          },
          itemStyle: {
            color: 'transparent', // Remove the blue background of the node
            borderColor: '#000', // Keep the border color
            borderWidth: 1, // Set the border thickness
          },
        },
      ],
    });

    chart.handle('selectchanged', (event) => {
      const { fromAction, fromActionPayload, isFromClick } = event;

      if (!isFromClick) {
        return;
      }

      const seriesIndex = fromActionPayload.seriesIndex;
      const dataIndex = fromActionPayload.dataIndexInside;
      const series = args.series[seriesIndex];
      const name = series.data[dataIndex] ? series.data[dataIndex].name : null;

      if (name) {
        chart.dispatchAction({
          type: fromAction,
          name,
        });
      }

      onSelect && onSelect(fromAction === 'select' ? name : null);
    });
  }

  /**
   * Generates the `data` section of the context used to construct this chart.
   */
  createContextData(args, chart) {
    const context = super.createContextData(args, chart);
    const { series, title } = this.drillPath.reduce(
      ({ series }, pathIndex) => ({
        series: series[pathIndex].series,
        title: series[pathIndex].label,
      }),
      { series: context.series, title: args.title }
    );

    return {
      ...context,
      series,
      title,
    };
  }

  /**
   * Adds the title to `config` as defined in the data or by `args` and returns
   * the new context layout.
   */
  addTitle(context, config) {
    const buttonLayout = this.addDrillUpButton(context, config);
    const buttonWidth = context.layout.width - buttonLayout.width;
    const buttonHeight = context.layout.height - buttonLayout.height;

    const titleLayout = super.addTitle(
      {
        ...context,
        args: {
          ...context.args,
          title: context.data.title ?? context.args.title,
        },
      },
      config
    );

    if (config.title?.[0]) {
      const titleHeight = context.layout.height - titleLayout.height;

      if (buttonHeight > titleHeight) {
        const heightDifference = buttonHeight - titleHeight;

        titleLayout.height -= heightDifference;
        titleLayout.y += heightDifference;

        // Center the title within the height of the button
        config.title[0].top = config.title[0].top / 2 + heightDifference / 2;
      }

      config.title[0].left += buttonWidth;
    }

    return titleLayout;
  }

  /**
   * Adds the drill up button to `config` and returns the new context layout.
   */
  addDrillUpButton(context, config) {
    if (!this.drillPath.length) {
      return context.layout;
    }

    const { layout, args, styles } = context;
    const { drillUpButtonText = '<' } = args;
    const style = resolveStyle(styles.drillUpButton, layout);
    const titleStyle = resolveStyle(styles.chartTitle, layout);
    const xMargins = style.marginLeft + style.marginRight;
    const yMargins = style.marginTop + style.marginBottom;

    // Ensure the button aligns with where the title is positioned
    style.marginTop += titleStyle.marginTop;
    style.marginLeft += titleStyle.marginLeft;

    const buttonConfig = this.generateDrillUpButtonConfig(drillUpButtonText, layout, style);

    mergeAtPaths(config, [buttonConfig]);

    const buttonBox = buttonConfig['graphic.elements'][0].children[0].shape;

    return {
      ...layout,
      width: layout.width - buttonBox.width - xMargins,
      height: layout.height - buttonBox.height - yMargins,
      x: layout.x + buttonBox.width + xMargins,
      y: layout.y + buttonBox.height + yMargins,
    };
  }

  /**
   * Generates the configuration for the drill up button.
   */
  generateDrillUpButtonConfig(text, layout, style) {
    const textMetrics = computeTextMetrics(text, style);

    return {
      'graphic.elements': [
        {
          type: 'group',
          left: style.marginLeft,
          top: style.marginTop,
          children: [
            // NOTE: This element is referenced by path in `addDrillUpButton`
            {
              type: 'rect',
              shape: {
                width: textMetrics.width + style.paddingLeft + style.paddingRight,
                height: textMetrics.fontHeight + style.paddingTop + style.paddingBottom,
                r: [
                  style.borderTopLeftRadius ?? 0,
                  style.borderTopRightRadius ?? 0,
                  style.borderBottomRightRadius ?? 0,
                  style.borderBottomLeftRadius ?? 0,
                ],
              },
              style: {
                stroke: style.borderColor ?? '#fff',
                fill: style.backgroundColor ?? '#fff',
              },
            },
            {
              type: 'text',
              x: style.paddingLeft,
              y: style.paddingTop,
              style: {
                fill: style.color,
                text,
                font: `${style.fontStyle} ${style.fontWeight} ${style.fontSize}px ${style.fontFamily}`,
              },
              textConfig: {
                distance: 0,
                inside: true,
                position: [10, 0],
              },
            },
          ],
          onclick: () => this.drillPath.popObject(),
        },
      ],
    };
  }

  /**
   * Generates the plot configuration for the graph chart.
   */
  generatePlotConfig(info, _cell, _context, _gridIndex) {
    // Implement the logic to generate the plot configuration
    return {
      // Example configuration
      series: [
        {
          type: 'graph',
          layout: 'force',
          data: info.data,
          links: info.links,
          roam: true,
          label: {
            show: true,
          },
          force: {
            repulsion: 1000,
          },
        },
      ],
    };
  }

  /**
   * Default styles for the graph chart.
   */
  get defaultStyles() {
    const styles = super.defaultStyles;

    return {
      ...styles,
      plot: {},
      node: {
        font: 'normal 12px Montserrat,sans-serif',
        textAlign: 'center',
        marginTop: 8,
      },
      link: {
        color: '#000',
        font: 'normal 12px Montserrat,sans-serif',
        marginRight: 8,
      },
      drillUpButton: {
        margin: 0,
        color: '#000',
        font: 'normal 22px Montserrat,sans-serif',
        marginRight: 10,
      },
    };
  }
}
