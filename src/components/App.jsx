import React from 'react';
import { Route } from 'react-router-dom';

import Header from './common/Header';
import Login from './public/Login';
import Home from './private/Home';

const App = () => (
  <div className="main">
    <Header />
    <Route exact path="/public" component={Login} />
    <Route exact path="/private" component={Home} />
  </div>
);

export default App;
