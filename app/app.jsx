const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');

const TodoApp = require('TodoApp');

const actions = require('actions');
const store = require('configureStore').configure();

// Load Foundation
$(document).foundation();

store.subscribe(() => {
  console.log('New state: ', store.getState());
})

// store.dispatch(actions.addTodo('Learn Redux'));
store.dispatch(actions.setSearchText('Red'));
// store.dispatch(actions.toggleShowCompleted());

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
