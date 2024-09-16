import Component from '@glimmer/component';

const penniesToDollars = (pennies) => {
  return `$${(pennies / 100).toFixed(2)}`;
};

export default class ChartTreeExample extends Component {
  chartData = {
    ROOT_NODE: {
      amount: null,
      annual_amount: null,
      level: null,
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
      amount: null,
      annual_amount: 525000,
      level: 3,
      label: '50% Reimbursement Program',
      children: [],
    },
    '1289163964941336949': {
      amount: null,
      annual_amount: 525000,
      level: 3,
      label: 'All Approval Workflow - DEMO',
      children: [],
    },
    '1310418064060187318': {
      amount: null,
      annual_amount: 525000,
      level: 3,
      label: 'Certificate Program',
      children: [],
    },
    '1371777411830514481': {
      amount: null,
      annual_amount: 525000,
      level: 3,
      label: 'Some Financial Program',
      children: [],
    },
    '1309521223441449642': {
      amount: null,
      annual_amount: 350000,
      level: 3,
      label: 'Continuing Education - PART_TIME',
      children: [],
    },
    '1360874423658217633': {
      amount: null,
      annual_amount: 525000,
      level: 3,
      label: 'Course Receipt Date',
      children: [],
    },
    '1473543349289877592': {
      amount: null,
      annual_amount: 525000,
      level: 3,
      label: 'Course Start Date Test',
      children: [],
    },
    '1441486675783975305': {
      amount: null,
      annual_amount: 525000,
      level: 3,
      label: 'Dependent Program',
      children: [],
    },
    '1289163944028537165': {
      amount: null,
      annual_amount: 525000,
      level: 3,
      label: 'Educational Assistance Program',
      children: [],
    },
    '1350740936640954616': {
      amount: null,
      annual_amount: 525000,
      level: 3,
      label: 'Multiple Course Approvers',
      children: [],
    },
    '1442032456739848688': {
      amount: null,
      annual_amount: 525000,
      level: 3,
      label: 'No Approvals Needed',
      children: [],
    },
    '1289163940077502789': {
      amount: null,
      annual_amount: 525000,
      level: 3,
      label: 'A Fun Certification',
      children: [],
    },
    '1289163975108329861': {
      amount: null,
      annual_amount: 525000,
      level: 3,
      label: 'Prepaid test program',
      children: [],
    },
    '1441623536376480161': {
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
    '1350723719283081457': {
      amount: null,
      annual_amount: 525000,
      level: 3,
      label: 'My Plan Key ',
      children: ['1440663828509492175'],
    },
    '1499303874703393104': {
      amount: null,
      annual_amount: 525000,
      level: 3,
      label: 'Type 2 Template 1',
      children: [],
    },
    '1443479929899451011': {
      amount: null,
      annual_amount: 525000,
      level: 3,
      label: 'University Course PDF Test',
      children: [],
    },
    '1310948024529191660': {
      amount: 0,
      annual_amount: 200000,
      level: 3,
      label: 'University - Educational Assistance Program - PART_TIME - Long Label',
      children: [],
    },
  };

  constructor() {
    super(...arguments);
    this.treeData = this.convertToTree(this.chartData, 'ROOT_NODE');
  }

  convertToTree(data, rootId) {
    // Helper function to recursively build the tree
    function buildTree(nodeId) {
      const node = data[nodeId];

      // Recursively build children
      const children = node.children.map((childId) => buildTree(childId));

      // Return the node with its children
      return {
        ...node,
        label: {
          position: 'top',
          top: '-20%',
          padding: [10, 150],
          formatter: function (params) {
            return `${params.name}\n Annual Amount: ${penniesToDollars(params.data.annual_amount)}`;
          },
        },
        name: node.label || rootId, // Rename label to name
        children: children, // Replace children IDs with actual objects
      };
    }

    // Start building the tree from the root node (e.g., 'TA')
    return buildTree(rootId);
  }
}
