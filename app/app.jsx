import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as actions from 'actions';
import * as configureStore from 'configureStore';

import TodoApp from 'TodoApp';
import TodoAPI from 'TodoAPI';

// Load Foundation
$(document).foundation();

store.subscribe(() => {
  var state = store.getState();
  TodoAPI.setTodos(state.todos);
})

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={ store }>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
