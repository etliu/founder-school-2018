import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from './components/Main';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
    </Route>
  </Router>
  , document.getElementById('app'));
  
  ReactDOM.render(
    <Router basename={'https://github.com/shampliu/founders-school'}>
      <Route path={`${process.env.PUBLIC_URL}/`} component={Main}>
      </Route>
    </Router>
  , document.getElementById('app'));