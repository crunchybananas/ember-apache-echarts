import Component from '@glimmer/component';

export default class ChartPieExample extends Component {
  chartData =      [{
      name: 'sent',
      value: 2,
    }, {
      name: 'draft',
      value: 1,
    }, {
      name: 'rejected',
      value: 13,
    }]
  ;
}