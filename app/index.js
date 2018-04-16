import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from './components/Main';
import MainOld from './components/MainOld';

ReactDOM.render(
  <Router history={hashHistory}>
  <div>
    <Route exact path='/' component={Main}/>
    <Route path='/2017' component={MainOld}/>
    </div>
  </Router>
  , document.getElementById('app'));