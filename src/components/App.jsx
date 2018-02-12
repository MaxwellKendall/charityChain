import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import GlobalHeader from './common/GlobalHeader';
import SignUp from './SignUp';
import { Button, Header, Icon, Image, Input, Grid, } from 'semantic-ui-react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export default class App extends Component {
  state = {
    email: '',
    data: [],
  }

  componentDidMount() {
    fetch('http://wforcharity.pythonanywhere.com/getChartData')
    .then(res => res.json())
    .then(res => { this.setState(prevState => ({ ...prevState, data: res.data }))
    });
   }

  addToEmail = () => {
    const base = 'http://wforcharity.pythonanywhere.com';
    const { email } = this.state;
    axios.post(`${base}/addToChain`, { "email": `${email}` })
    .then(res => console.log('this is the response from the post', res));
  }

  onChange = (e) => {
    e.persist();
    console.log('event.target.value', e.target.value);
    this.setState(prevState => ({ ...prevState, email: e.target.value }))
  }

  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <GlobalHeader />
        <Grid columns={1} padded className="grid__main">
          <Grid.Column className="signUp__container">
            <Input placeholder='Email' value={this.state.email} onChange={this.onChange}/>
            <SignUp onClick={this.addToEmail} />
            <div className="chart">
            <LineChart width={400} height={400} data={data}>
              <Line type="monotone" dataKey="y" stroke="#fdc02f" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            </LineChart>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
} 

