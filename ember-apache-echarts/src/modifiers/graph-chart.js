import { tracked } from '@glimmer/tracking';
import { compact } from 'lodash-es';
import { countBy } from 'lodash-es';
import { flatten } from 'lodash-es';
import * as echarts from 'echarts';
import mergeAtPaths from '../utils/merge-at-paths';
import AbstractChartModifier from './abstract-chart';
import resolveStyle from '../utils/style/resolve-style';
import computeTextMetrics from '../utils/layout/compute-text-metrics';

const INPUT_DATA = {
  "TA": {
      "amount": null,
      "annual_amount": null,
      "level": null,
      "label": null,
      "children": [
          "1350145173011563451",
          "1289163964941336949",
          "1310418064060187318",
          "1371777411830514481",
          "1309521223441449642",
          "1360874423658217633",
          "1473543349289877592",
          "1441486675783975305",
          "1289163944028537165",
          "1350740936640954616",
          "1442032456739848688",
          "1289163940077502789",
          "1289163975108329861",
          "1441623536376480161",
          "1440663828509492175",
          "1350723719283081457",
          "1499303874703393104",
          "1443479929899451011",
          "1310948024529191660"
      ]
  },
  "1350145173011563451": {
      "amount": null,
      "annual_amount": 525000,
      "level": 3,
      "label": "50% Reimbursement Program",
      "children": []
  },
  "1289163964941336949": {
      "amount": null,
      "annual_amount": 525000,
      "level": 3,
      "label": "All Approval Workflow - DEMO",
      "children": []
  },
  "1310418064060187318": {
      "amount": null,
      "annual_amount": 525000,
      "level": 3,
      "label": "Certificate Program",
      "children": []
  },
  "1371777411830514481": {
      "amount": null,
      "annual_amount": 525000,
      "level": 3,
      "label": "Claims Financials Program",
      "children": []
  },
  "1309521223441449642": {
      "amount": null,
      "annual_amount": 350000,
      "level": 3,
      "label": "Continuing Education - PART_TIME",
      "children": []
  },
  "1360874423658217633": {
      "amount": null,
      "annual_amount": 525000,
      "level": 3,
      "label": "Course Receipt Date",
      "children": []
  },
  "1473543349289877592": {
      "amount": null,
      "annual_amount": 525000,
      "level": 3,
      "label": "Course Start Date Test",
      "children": []
  },
  "1441486675783975305": {
      "amount": null,
      "annual_amount": 525000,
      "level": 3,
      "label": "Dependent Program",
      "children": []
  },
  "1289163944028537165": {
      "amount": null,
      "annual_amount": 525000,
      "level": 3,
      "label": "Educational Assistance Program",
      "children": []
  },
  "1350740936640954616": {
      "amount": null,
      "annual_amount": 525000,
      "level": 3,
      "label": "Multiple Course Approvers",
      "children": []
  },
  "1442032456739848688": {
      "amount": null,
      "annual_amount": 525000,
      "level": 3,
      "label": "No Approvals Needed",
      "children": []
  },
  "1289163940077502789": {
      "amount": null,
      "annual_amount": 525000,
      "level": 3,
      "label": "OSHA Certification",
      "children": []
  },
  "1289163975108329861": {
      "amount": null,
      "annual_amount": 525000,
      "level": 3,
      "label": "Prepaid test program",
      "children": []
  },
  "1441623536376480161": {
      "amount": null,
      "annual_amount": 525000,
      "level": 3,
      "label": "Program Major Text Test",
      "children": []
  },
  "1440663828509492175": {
      "amount": null,
      "annual_amount": 525000,
      "level": 3,
      "label": "Semester Code",
      "children": []
  },
  "1350723719283081457": {
      "amount": null,
      "annual_amount": 525000,
      "level": 3,
      "label": "SLR Plan Key ",
      "children": []
  },
  "1499303874703393104": {
      "amount": null,
      "annual_amount": 525000,
      "level": 3,
      "label": "Type 2 Template 1",
      "children": []
  },
  "1443479929899451011": {
      "amount": null,
      "annual_amount": 525000,
      "level": 3,
      "label": "UPMC Course PDF Test",
      "children": []
  },
  "1310948024529191660": {
      "amount": 0,
      "annual_amount": 200000,
      "level": 3,
      "label": "Wellstar - Educational Assistance Program - PART_TIME",
      "children": []
  }
};

function wrapText(text, maxLineLength) {
  const words = text.split(' ');
  let result = '';
  let currentLine = '';

  words.forEach((word) => {
    if ((currentLine + word).length > maxLineLength) {
      result += currentLine + '\n';
      currentLine = word + ' ';
    } else {
      currentLine += word + ' ';
    }
  });

  result += currentLine.trim();
  return result;
}

export default class GraphChartModifier extends AbstractChartModifier {
  @tracked drillPath = [];

  /**
   * Configures the chart with the provided arguments.
   */
  configureChart(args, chart) {
    const { tooltipFormatter, onSelect } = args;
    const { config } = this.buildLayout(args, chart);
    ;
    const { nodes, links } = this.transformGraphData(INPUT_DATA);

    chart.setOption({
      ...config,
      tooltip: {
        formatter: tooltipFormatter,
      },
      // animationThreshold: 1000, // Threshold to disable animation for large datasets
      // layoutAnimation: false,
      series: [
        {
          type: 'graph',
          layout: 'force',
          animation: false,
          data: nodes,
          links: links,
          roam: true,
          edgeSymbol: ['none', 'arrow'], // Add arrows
          edgeSymbolSize: [10, 10], // Adjust arrow size
          edgeShape: 'polyline',
          lineStyle: {
            width: 2, // Edge thickness
            color: 'gray', // Edge color
            curveness: 0.3, // Slight curve to avoid overlap
          },
          label: {
            show: true,
            position: 'inside', // Keep label inside the rectangle
            backgroundColor: '#fff', // Box background
            borderColor: '#000', // Box border
            borderWidth: 1, // Border thickness
            padding: [3, 5], // Padding inside the box
            fontSize: 12, // Text size
            rich: {
              wrap: {
                width: 150, // Set max width to wrap text
                lineHeight: 20, // Control line height for better readability
                overflow: 'break', // Break long words if necessary
              },
            },
            // formatter: function (params) {
            //   const wrappedText = wrapText(`${params.name}: $${params.value ? params.value.toLocaleString() : 'N/A'}`, 15); // Wrap at 15 characters
            //   return wrappedText;
            // },
            color: '#000',
          },
          force: {
            repulsion: 500, // Space nodes apart
            gravity: 0.05, // Control the grouping of nodes
            edgeLength: [100, 150], // Distance between connected nodes
          },
          zoom: 2,
          symbolSize: [150, 60], // Node size (rectangle)
          symbolKeepAspect: true, // Keep aspect ratio of rectangle
          symbol: 'rect', // Use rectangle nodes,
          emphasis: {
            focus: 'adjacent'
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

    const buttonConfig = this.generateDrillUpButtonConfig(
      drillUpButtonText,
      layout,
      style
    );

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
                width:
                  textMetrics.width + style.paddingLeft + style.paddingRight,
                height:
                  textMetrics.fontHeight +
                  style.paddingTop +
                  style.paddingBottom,
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
  generatePlotConfig(info, cell, context, gridIndex) {
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

  // will not be part of final component. Caller will do transform.

  transformGraphData(inputData) {
    const nodes = [];
    const links = [];

    // Recursively process each node and its children
    function processNode(nodeId, data) {
      const node = data[nodeId];

      // Add node to the nodes array with label and value
      nodes.push({
        name: node.label || nodeId, // Use label if available, otherwise nodeId
        value: node.annual_amount || 0, // Use annual_amount, default to 0 if not available
        label: {
          show: true,
          position: 'inside',
          formatter: `{b}: ${node.annual_amount ? `$${node.annual_amount}` : 'N/A'}`, // Display "label: $annual_amount"
          backgroundColor: '#fff',
          borderColor: '#000',
          borderWidth: 1,
          padding: [3, 5],
          fontSize: 12,
          color: '#000',
          formatter: function (params) {
            const wrappedText = wrapText(`${params.name}: $${params.value ? params.value.toLocaleString() : 'N/A'}`, 15); // Wrap at 15 characters
            return wrappedText;
          },
          rich: {
            wrap: {
              width: 80, // Set max width to wrap text
              overflow: 'break', // Break long words if necessary
              lineHeight: 14, // Control line height
            }
          }
        },
        symbolSize: [80, 40], // Customize size of the rectangle
        symbol: 'rect', // Use rectangular shape
      });

      // Add links to children
      if (node.children) {
        node.children.forEach((childId) => {
          links.push({
            source: node.label || nodeId,
            target: data[childId].label || childId, // Use label for source and target if available
          });

          // Recursively process child nodes
          processNode(childId, data);
        });
      }
    }

    // Start processing from the root node ('TA' in this case)
    processNode('TA', inputData);

    return { nodes, links };
  }

}
