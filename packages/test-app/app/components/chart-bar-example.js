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

  stackedOptions = {
    title: {
      text: 'Stacked Line',
    },
    tooltip: {
      trigger: 'axis',
    },
    // legend: {
    //   data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
    // },
    legend: 'top',
    legendOrientation: 'horizontal',
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        smooth: true,
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        smooth: true,
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        smooth: true,
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        smooth: true,
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        smooth: true,
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  };
}
