import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';

import * as configureStore from 'configureStore';

import TodoApp from 'TodoApp';
import TodoAPI from 'TodoAPI';
import Main from 'Main';
import Login from 'Login';
import * as actions from 'actions';

// Load Foundation
$(document).foundation();
// App css
require('style!css!sass!applicationStyles');

const store = configureStore.configure();
store.dispatch(actions.startAddTodos());

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ Main }>
      	<IndexRoute component={ Login } />
      	<Route path="todos" component={ TodoApp } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
