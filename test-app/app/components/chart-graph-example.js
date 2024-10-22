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
    amount: null,
    annual_amount: null,
    level: null,
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
      '14',
      '15',
      '16',
      '17',
      '18',
    ],
  },
  1: {
    annual_amount: 525000,
    level: 3,
    label: 'Plan Ex - Education Plan',
    children: [],
  },
  2: {
    annual_amount: 525000,
    level: 3,
    label: 'All Approval Workflow - DEMO',
    children: [],
  },
  3: {
    amount: null,
    annual_amount: 525000,
    level: 3,
    label: 'Certificate Program',
    children: [],
  },
  4: {
    amount: null,
    annual_amount: 525000,
    level: 3,
    label: 'Some Financial Program',
    children: [],
  },
  5: {
    amount: null,
    annual_amount: 350000,
    level: 3,
    label: 'Continuing Education - PART_TIME',
    children: [],
  },
  6: {
    amount: null,
    annual_amount: 525000,
    level: 3,
    label: 'Course Receipt Date',
    children: [],
  },
  7: {
    amount: null,
    annual_amount: 525000,
    level: 3,
    label: 'Course Start Date Test',
    children: [],
  },
  8: {
    amount: null,
    annual_amount: 525000,
    level: 3,
    label: 'Dependent Program',
    children: [],
  },
  9: {
    amount: null,
    annual_amount: 525000,
    level: 3,
    label: 'Educational Assistance Program',
    children: [],
  },
  10: {
    amount: null,
    annual_amount: 525000,
    level: 3,
    label: 'Multiple Course Approvers',
    children: [],
  },
  11: {
    amount: null,
    annual_amount: 525000,
    level: 3,
    label: 'No Approvals Needed',
    children: [],
  },
  12: {
    amount: null,
    annual_amount: 525000,
    level: 3,
    label: 'A Fun Certification',
    children: [],
  },
  13: {
    amount: null,
    annual_amount: 525000,
    level: 3,
    label: 'Prepaid test program',
    children: [],
  },
  14: {
    amount: null,
    annual_amount: 525000,
    level: 3,
    label: 'Program Major Text Test',
    children: [],
  },
  '1440663828509492175': {
    amount: null,
    annual_amount: 525000,
    level: 3,
    label: 'Semester Code',
    children: [],
  },
  15: {
    amount: null,
    annual_amount: 525000,
    level: 3,
    label: 'My Plan Key ',
    children: ['1440663828509492175'],
  },
  16: {
    amount: null,
    annual_amount: 525000,
    level: 3,
    label: 'Type 2 Template 1',
    children: [],
  },
  17: {
    amount: null,
    annual_amount: 525000,
    level: 3,
    label: 'University Course PDF Test',
    children: [],
  },
  18: {
    amount: 0,
    annual_amount: 200000,
    level: 3,
    label:
      'University - Educational Assistance Program - PART_TIME - Long Label',
    children: [],
  },
};
