import React from 'react';
import createReactClass from 'create-react-class';
import { Pie as LineChart } from 'react-chartjs';
import { chartData, chartOptions } from '../chartConfig';

const MyChart = createReactClass({
  render: function() {
    return <LineChart data={chartData} options={chartOptions} width="600" height="250" />
  }
});

export default MyChart;