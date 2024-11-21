import Component from '@glimmer/component';

export default class ChartGraphExample extends Component {
  constructor() {
    super(...arguments);
    const { nodes, links } = this.transformGraphData('ROOT_NODE', chartData);
    this.graphData = nodes;
    this.graphLinks = links;
  }

  /**
   * Generates the series configuration for the chart, adjusting properties based on the orientation.
   *
   * @returns {Object} The series configuration object for the chart.
   */
  get seriesConfig() {
    // Common label styles
    const commonLabelStyles = {
      position: 'inside',
      backgroundColor: 'transparent',
      fontSize: 12,
      lineHeight: 30,
      rich: {
        outline: {
          textBorderColor: '#fff',
          textBorderWidth: 4,
        },
      },
      formatter: '{outline|{b}}',
    };

    return {
      type: 'graph',
      layout: 'force',
      animation: false,
      roam: true,
      symbol: 'circle',
      symbolKeepAspect: true,
      symbolSize: 100,
      edgeSymbol: ['none', 'arrow'],
      edgeShape: 'polyline',
      label: {
        ...commonLabelStyles,
      },
      force: {
        repulsion: 600,
        gravity: 0.01,
        edgeLength: 400,
      },
      itemStyle: {
        color: 'white', // Remove the blue background of the node
        borderWidth: 2,
        borderColor: '#333',
      },
    };
  }

  // will not be part of final component. Caller will do transform.
  transformGraphData(root, inputData) {
    const nodes = [];
    const links = [];

    // Recursively process each node and its children
    function processNode(nodeId, data) {
      const node = data[nodeId];

      // Add node to the nodes array with label and value
      nodes.push({
        name: node.label || nodeId, // Use label if available, otherwise nodeId
        value: node.annual_amount || 0, // Use annual_amount, default to 0 if not available
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
    processNode(root, inputData);

    return { nodes, links };
  }
}

const chartData = {
  ROOT_NODE: {
    label: null,
    children: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '15',
      '16',
      '17',
      '18',
    ],
  },
  1: {
    annual_amount: 525000,
    level: 3,
    label: 'Fry',
    children: [],
  },
  2: {
    annual_amount: 525000,
    level: 3,
    label: 'Leela',
    children: [],
  },
  3: {
    annual_amount: 525000,
    level: 3,
    label: 'Bender',
    children: [],
  },
  4: {
    annual_amount: 525000,
    level: 3,
    label: 'Professor Farnsworth',
    children: ['14'],
  },
  5: {
    annual_amount: 350000,
    level: 3,
    label: 'Amy Wong',
    children: [],
  },
  6: {
    annual_amount: 525000,
    level: 3,
    label: 'Dr. Zoidberg',
    children: [],
  },
  7: {
    annual_amount: 525000,
    level: 3,
    label: 'Hermes Conrad',
    children: ['19'],
  },
  8: {
    annual_amount: 525000,
    level: 3,
    label: 'Zapp Brannigan',
    children: [],
  },
  9: {
    annual_amount: 525000,
    level: 3,
    label: 'Kif Kroker',
    children: [],
  },
  10: {
    annual_amount: 525000,
    level: 3,
    label: 'Nibbler',
    children: [],
  },
  11: {
    annual_amount: 525000,
    level: 3,
    label: 'Mom',
    children: [],
  },
  12: {
    annual_amount: 525000,
    level: 3,
    label: 'Scruffy',
    children: [],
  },
  13: {
    annual_amount: 525000,
    level: 3,
    label: 'Calculon',
    children: [],
  },
  14: {
    annual_amount: 525000,
    level: 3,
    label: 'Cubert Farnsworth',
    children: [],
  },
  15: {
    annual_amount: 525000,
    level: 3,
    label: 'Morbo',
    children: ['20'],
  },
  16: {
    annual_amount: 525000,
    level: 3,
    label: 'Lrrr',
    children: [],
  },
  17: {
    annual_amount: 525000,
    level: 3,
    label: 'Hypnotoad',
    children: [],
  },
  18: {
    amount: 0,
    annual_amount: 200000,
    level: 3,
    label: 'Robot Devil',
    children: [],
  },
  19: {
    annual_amount: 525000,
    level: 3,
    label: 'Dwight Conrad',
    children: [],
  },
  20: {
    annual_amount: 525000,
    level: 3,
    label: 'Linda',
    children: [],
  },
};
