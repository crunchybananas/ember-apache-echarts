import Component from '@glimmer/component';

export default class ChartBarExample extends Component {
  chartData = [
    {
      name: 'draft',
      value: 1,
    },
    {
      name: 'sent',
      value: 2,
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
          name: 'draft',
          value: 1,
        },
        {
          name: 'sent',
          value: 2,
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
          name: 'draft',
          value: 2,
        },
        {
          name: 'sent',
          value: 4,
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
          name: 'draft',
          value: 5,
        },
        {
          name: 'sent',
          value: 42,
        },
        {
          name: 'rejected',
          value: 21,
        },
      ],
    },
  ];
}
