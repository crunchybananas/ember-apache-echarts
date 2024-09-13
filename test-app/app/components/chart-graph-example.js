import Component from '@glimmer/component';

export default class ChartGraphExample extends Component {
  graphData = [
    { name: 'Node1', value: 10 },
    { name: 'Node2', value: 20 },
    { name: 'Node3', value: 30 },
    { name: 'Node4', value: 40 },
  ];

  graphLinks = [
    { source: 'Node1', target: 'Node2' },
    { source: 'Node2', target: 'Node3' },
    { source: 'Node3', target: 'Node4' },
    { source: 'Node4', target: 'Node1' },
  ];
}
