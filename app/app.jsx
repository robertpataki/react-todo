import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as actions from 'actions';
import * as configureStore from 'configureStore';

import TodoApp from 'TodoApp';
import TodoAPI from 'TodoAPI';

// Load Foundation
$(document).foundation();
// App css
require('style!css!sass!applicationStyles');

const store = configureStore.configure();
store.dispatch(actions.startAddTodos());

ReactDOM.render(
  <Provider store={ store }>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
