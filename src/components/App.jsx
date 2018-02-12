import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import GlobalHeader from './common/GlobalHeader';
import SignUp from './SignUp';
import Chart from './Chart';
import { Button, Header, Icon, Image, Input, Grid, } from 'semantic-ui-react';

export default class App extends Component {
  state = {
    email: '',
  }

  addToEmail = () => {
    const base = 'http://wforcharity.pythonanywhere.com';
    const { email } = this.state;
    axios.post(`${base}/addToChain`, { "email": `${email}` })
    .then(res => console.log('this is the response from the post', res));
  }

  onChange = (e) => {
    e.persist();
    this.setState(prevState => ({ ...prevState, email: e.target.value }))
  }

  render() {
    const data = [
      {t: "2018-02-10 01:36:35", y: 1},
      {t: "2018-02-10 02:31:00", y: 2},
      {t: "2018-02-10 03:01:15", y: 3},
      {t: "2018-02-10 03:01:27", y: 4},
      {t: "2018-02-10 03:05:55", y: 5},
      {t: "2018-02-10 03:06:38", y: 6},
      {t: "2018-02-10 03:10:14", y: 7},
      {t: "2018-02-12 15:54:35", y: 8},
    ];

    return (
      <div className="container">
        <GlobalHeader />
        {/* <Grid columns={1} padded className="grid__main"> */}
          <Grid.Column className="signUp__container">
            <Input className="signUp__input" placeholder='Email' value={this.state.email} onChange={this.onChange}/>
            <SignUp onClick={this.addToEmail} />
          </Grid.Column>
          <Grid.Column className="chart__container">
            <Chart />
          </Grid.Column>
        {/* </Grid> */}
      </div>
    );
  }
} 

