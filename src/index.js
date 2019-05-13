import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home/home';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Navigation from './pages/navigation/navigation.js';

// ReactDOM.render(<Home />, document.getElementById('root'));
ReactDOM.render((
  <BrowserRouter> 
      <div>
        <Switch>
          <Route exact path="/" component={Home}></Route> 
          <Route path="/navigation" component={Navigation}></Route> 
        </Switch>
      </div>
    </BrowserRouter>
), document.getElementById('root'));
