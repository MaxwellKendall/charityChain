import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { chartData, chartOptions } from '../chartConfig';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export default class Chart extends Component {
  static propTypes = {
    // chartData: PropTypes.arrayOf(PropTypes.object),
    // getChartData: PropTypes.func.isRequired,
  }

  state = {
    data: null,
  }

  componentDidMount() {
    return axios.get('http://wforcharity.pythonanywhere.com/getChartData')
      .then((res) => {
        console.log('getChartData API response: ', res.data.data);
        this.setState(prevState => ({ ...prevState, data: res.data.data }) )
      })
      .catch(err => console.log('ERROR from getChartData: ', err));
  }

  render() {
    return (
      <div className='myChart'>
        <LineChart width={400} height={400} data={this.state.data}>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="y" stroke="#fdc02f" />
        </LineChart>
      </div>
    );
  }
}
