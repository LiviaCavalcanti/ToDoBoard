import React, { Component } from 'react';
import { BrowserRouter, Switch, Route  } from 'react-router-dom'
import Board from './pages/main/index'
import Start from './components/Start/index'

export default class App extends Component {

render(){
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/boards" exact={true} component={Board} />
      <Route path="/" exact={true} component={Start} />
      </Switch>
    </BrowserRouter>
  );
}

}

