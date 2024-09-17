import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

const penniesToDollars = (pennies) => {
  return `$${(pennies / 100).toFixed(2)}`;
};

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
          textBorderWidth: 2,
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
      '1350145173011563451',
      '1289163964941336949',
      '1310418064060187318',
      '1371777411830514481',
      '1309521223441449642',
      '1360874423658217633',
      '1473543349289877592',
      '1441486675783975305',
      '1289163944028537165',
      '1350740936640954616',
      '1442032456739848688',
      '1289163940077502789',
      '1289163975108329861',
      '1441623536376480161',
      '1350723719283081457',
      '1499303874703393104',
      '1443479929899451011',
      '1310948024529191660',
    ],
  },
  '1350145173011563451': {
    annual_amount: 525000,
    level: 3,
    label: '50% Reimbursement Program',
    children: [],
  },
  '1289163964941336949': {
    annual_amount: 525000,
    level: 3,
    label: 'All Approval Workflow - DEMO',
    children: [],
  },
  '1310418064060187318': {
    annual_amount: 525000,
    level: 3,
    label: 'Certificate Program',
    children: [],
  },
  '1371777411830514481': {
    annual_amount: 525000,
    level: 3,
    label: 'Some Financial Program',
    children: [],
  },
  '1309521223441449642': {
    annual_amount: 350000,
    level: 3,
    label: 'Continuing Education - PART_TIME',
    children: [],
  },
  '1360874423658217633': {
    annual_amount: 525000,
    level: 3,
    label: 'Course Receipt Date',
    children: [],
  },
  '1473543349289877592': {
    annual_amount: 525000,
    level: 3,
    label: 'Course Start Date Test',
    children: [],
  },
  '1441486675783975305': {
    annual_amount: 525000,
    level: 3,
    label: 'Dependent Program',
    children: [],
  },
  '1289163944028537165': {
    annual_amount: 525000,
    level: 3,
    label: 'Educational Assistance Program',
    children: [],
  },
  '1350740936640954616': {
    annual_amount: 525000,
    level: 3,
    label: 'Multiple Course Approvers',
    children: [],
  },
  '1442032456739848688': {
    annual_amount: 525000,
    level: 3,
    label: 'No Approvals Needed',
    children: [],
  },
  '1289163940077502789': {
    annual_amount: 525000,
    level: 3,
    label: 'A Fun Certification',
    children: [],
  },
  '1289163975108329861': {
    annual_amount: 525000,
    level: 3,
    label: 'Prepaid test program',
    children: [],
  },
  '1441623536376480161': {
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
  '1350723719283081457': {
    annual_amount: 525000,
    level: 3,
    label: 'My Plan Key ',
    children: ['1440663828509492175'],
  },
  '1499303874703393104': {
    annual_amount: 525000,
    level: 3,
    label: 'Type 2 Template 1',
    children: [],
  },
  '1443479929899451011': {
    annual_amount: 525000,
    level: 3,
    label: 'University Course PDF Test',
    children: [],
  },
  '1310948024529191660': {
    amount: 0,
    annual_amount: 200000,
    level: 3,
    label:
      'University - Educational Assistance Program - PART_TIME - Long Label',
    children: [],
  },
};
