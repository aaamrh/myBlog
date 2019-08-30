import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import Home from './pages/home/home';
import Navigation from './pages/navigation/navigation.js';
import Admin from './pages/admin/admin.js';

import reducer from './reducer'
import ToHome from './components/ToHome/ToHome';

// ReactDOM.render(<Home />, document.getElementById('root'));

const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():f=>f
))

ReactDOM.render(
  (
    <Provider store = {store}>
      <BrowserRouter> 
        <div>
          <Switch>
            <Route exact path="/" component={ToHome}></Route> 
            <Route path="/home" component={Home}></Route> 
            <Route path="/navigation" component={Navigation}></Route> 
            <Route path="/admin" component={Admin}></Route> 
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
    
  ), 
  document.getElementById('root')
);
