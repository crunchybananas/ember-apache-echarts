import Component from '@glimmer/component';

export default class ChartPieExample extends Component {
  chartData = [
    {
      name: 'sent',
      value: 2,
    },
    {
      name: 'draft',
      value: 1,
    },
    {
      name: 'rejected',
      value: 13,
    },
  ];

  seriesData = [
    {
      label: 'Today',
      data: [
        {
          name: 'sent',
          value: 2,
        },
        {
          name: 'draft',
          value: 1,
        },
        {
          name: 'rejected',
          value: 13,
        },
      ],
    },
    {
      label: 'Yesterday',
      data: [
        {
          name: 'sent',
          value: 4,
        },
        {
          name: 'draft',
          value: 2,
        },
        {
          name: 'rejected',
          value: 5,
        },
      ],
    },
    {
      label: 'Last Week',
      data: [
        {
          name: 'sent',
          value: 42,
        },
        {
          name: 'draft',
          value: 5,
        },
        {
          name: 'rejected',
          value: 21,
        },
      ],
    },
  ];
}
