import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

/**
 * ChartTreeExample component renders a tree chart with adjustable orientation.
 */
export default class ChartTreeExample extends Component {
  /**
   * Determines whether the chart orientation is vertical (`true`) or horizontal (`false`).
   * @type {boolean}
   */
  @tracked isVertical = false;

  /**
   * Estimated pixels per leaf node used to calculate chart height.
   * @type {number}
   */
  static PIXELS_PER_LEAF_NODE = 50;

  constructor() {
    super(...arguments);
    this.treeData = this.convertToTree(chartData, 'ROOT_NODE');
  }

  /**
   * Generates the series configuration for the chart, adjusting properties based on the orientation.
   *
   * @returns {Object} The series configuration object for the chart.
   */
  get seriesConfig() {
    const isVertical = this.isVertical;

    // Common label styles
    const commonLabelStyles = {
      rotate: isVertical ? 90 : 0,
      fontSize: 12,
      lineHeight: 30,
      padding: isVertical ? [0, 10, 0, 0] : 0,
      rich: {
        outline: {
          textBorderColor: '#fff',
          textBorderWidth: 4,
        },
      },
      formatter: '{outline|{b}}',
      position: isVertical ? '' : 'right',
      align: isVertical ? 'right' : 'left',
    };

    return {
      zoom: 1,
      orient: isVertical ? 'TB' : 'LR',
      layout: 'orthogonal',
      edgeShape: 'curve',
      edgeForkPosition: isVertical ? '50%' : '63%',
      edgeOrient: isVertical ? 'vertical' : 'horizontal',
      symbol: 'emptyCircle',
      symbolSize: 10,
      label: {
        ...commonLabelStyles,
      },
      leaves: {
        label: {
          ...commonLabelStyles,
        },
      },
      lineStyle: {
        width: 2,
        curveness: isVertical ? 0.3 : 0.5,
      },
      ...(isVertical
        ? { edgeForkExpandHeight: 30 }
        : { edgeForkExpandWidth: 20 }),
    };
  }

  /**
   * Converts a flat data structure into a hierarchical tree structure suitable for the chart.
   *
   * @param {Object} data - The flat data object where each key is a node ID and value is the node data.
   * @param {string} rootId - The ID of the root node.
   * @returns {Object} The tree structure starting from the root node.
   */
  convertToTree(data, rootId) {
    // Helper function to recursively build the tree
    function buildTree(nodeId) {
      const node = data[nodeId];

      // Recursively build children
      const children = node.children.map((childId) => buildTree(childId));

      // Return the node with its children
      return {
        ...node,
        name: node.label || rootId,
        children: children,
      };
    }

    // Start building the tree from the root node (e.g., 'TA')
    return buildTree(rootId);
  }

  /**
   * Recursively counts the number of leaf nodes in the tree.
   *
   * @param {Object} node - The node to start counting from.
   * @returns {number} The total number of leaf nodes under the given node.
   */
  countLeafNodes(node) {
    if (!node || !node.children || node.children.length === 0) {
      return 1;
    }
    return node.children.reduce(
      (sum, child) => sum + this.countLeafNodes(child),
      0
    );
  }

  /**
   * Estimates the height of the chart based on the number of leaf nodes.
   *
   * @returns {string} The estimated height in pixels, e.g., '500px'.
   */
  get estimatedHeight() {
    const leafNodeCount = this.countLeafNodes(this.treeData);
    return `${leafNodeCount * ChartTreeExample.PIXELS_PER_LEAF_NODE * 0.5}px`;
  }

  /**
   * Action to toggle the orientation of the chart between vertical and horizontal.
   */
  @action
  toggleDirection() {
    this.isVertical = !this.isVertical;
  }
}

/**
 * The base chart data used to construct the tree.
 * @type {Object}
 * @discussion - the data can come from various sources and formats. Look at the convert to tree
 * method to see how it is transformed into a tree structure.
 */

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
      '14',
      '15',
      '16',
      '17',
      '18',
    ],
  },
  '1': {
    annual_amount: 525000,
    level: 3,
    label: '50% Restaurant Program',
    children: [],
  },
  '2': {
    annual_amount: 525000,
    level: 3,
    label: 'All Approval Workflow - DEMO',
    children: [],
  },
  '3': {
    annual_amount: 525000,
    level: 3,
    label: 'Certificate Program',
    children: [],
  },
  '4': {
    annual_amount: 525000,
    level: 3,
    label: 'Some Financial Program',
    children: [],
  },
  '5': {
    annual_amount: 350000,
    level: 3,
    label: 'Continuing Education - PART_TIME',
    children: [],
  },
  '6': {
    annual_amount: 525000,
    level: 3,
    label: 'Course Receipt Date',
    children: [],
  },
  '7': {
    annual_amount: 525000,
    level: 3,
    label: 'Course Start Date Test',
    children: [],
  },
  '8': {
    annual_amount: 525000,
    level: 3,
    label: 'Dependent Program',
    children: [],
  },
  '9': {
    annual_amount: 525000,
    level: 3,
    label: 'Educational Assistance Program',
    children: [],
  },
  '10': {
    annual_amount: 525000,
    level: 3,
    label: 'Multiple Course Approvers',
    children: [],
  },
  '11': {
    annual_amount: 525000,
    level: 3,
    label: 'No Approvals Needed',
    children: [],
  },
  '12': {
    annual_amount: 525000,
    level: 3,
    label: 'A Fun Certification',
    children: [],
  },
  '13': {
    annual_amount: 525000,
    level: 3,
    label: 'Prepaid test program',
    children: [],
  },
  '14': {
    annual_amount: 525000,
    level: 3,
    label: 'Program Major Text Test',
    children: [],
  },
  '1440663828509492175': {
    annual_amount: 525000,
    level: 3,
    label: 'Semester Code',
    children: [],
  },
  '15': {
    annual_amount: 525000,
    level: 3,
    label: 'My Plan Key ',
    children: ['1440663828509492175'],
  },
  '16': {
    annual_amount: 525000,
    level: 3,
    label: 'Type 2 Template 1',
    children: [],
  },
  '17': {
    annual_amount: 525000,
    level: 3,
    label: 'University Course PDF Test',
    children: [],
  },
  '18': {
    amount: 0,
    annual_amount: 200000,
    level: 3,
    label:
      'University - Educational Assistance Program - PART_TIME - Long Label',
    children: [],
  },
};
