import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home, Login, Register, Customers } from './containers';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/login' component={ Login } />
          <Route path='/register' component={ Register } />
          <Route path='/customers' component={ Customers } />
        </Switch>
      </BrowserRouter>
    );
  }
};

export default App;
