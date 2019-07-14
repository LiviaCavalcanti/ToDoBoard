import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch} from 'react-router-dom';

import App from './App';
import Board from './components/Board/index';
import Start from './components/Start/index';
import Schedule from './components/Schedule/index';


ReactDOM.render(
        <BrowserRouter>
              <Switch>
                <Route path='/' exact={true} component={()=><Start/>}/>
                <Route path='/boards' component={()=><Board/>}/>
                <Route path='/schedule' component={()=><Schedule/>}/>
              </Switch>
              
        </BrowserRouter>
   
, document.getElementById('root'));
