import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Line } from "react-chartjs";
import { Segment, Divider } from 'semantic-ui-react'

export default class Chart extends Component {
 static propTypes = {}
 state = {
   chartLabels: '',
   chartData: '',
 }

//  componentWillMount() {
//   fetch('http://wforcharity.pythonanywhere.com/getChartData')
//       .then(res => res.json())
//       .then(res => {
//         this.setState(prevState => ({ ...prevState, labels: res.labels, data: res.data, }));
//       });
//  }

//  componentDidMount() {
//   fetch('http://wforcharity.pythonanywhere.com/getChartData')
//   .then(res => res.json())
//   .then(res => {
//     this.setState(prevState => ({ ...prevState, labels: res.labels, data: res.data, }));
//   });
//  }

  // updateCanvas = () => {
  //   const ctx = this.myChart.getContext('2d');
  //   return new Chart(ctx, {
  //     type: 'line',
  //     data: {
  //         // labels: this.state.labels,
  //         labels: ['2018-02-10 01:36:35','2018-02-10 01:50:35','2018-02-10 02:50:35'],
  //         datasets: [{
  //             label: '# of Entries',
  //             data: [{t:'2018-02-10 01:36:35', y:12}, {t:'2018-02-10 01:50:35', y:30}, {t:'2018-02-10 02:50:35', y:100}],
  //             backgroundColor: [
  //                 'rgba(255, 99, 132, 0.2)'
  //             ],
  //             borderColor: [
  //                 'rgba(255,99,132,1)'
  //             ],
  //             borderWidth: 1
  //         }]
  //     },
  //     options: {
  //         scales: {
  //             yAxes: [{
  //                 ticks: {
  //                     beginAtZero:true
  //                 }
  //             }]
  //         }
  //     }
  //   })      
  // }

  render() {
    const { chartData, chartLabels } = this.state;
    return (
      <div>
        <Line data={chartData} options={chartOptions} width="600" height="250"/>
      </div>
    );
  }
}
