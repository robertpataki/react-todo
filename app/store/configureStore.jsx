const redux = require('redux');
const reducers = require('reducers');

export var configure = () => {
  var reducer = redux.combineReducers({
    searchText: reducers.searchTextReducer,
    todos: reducers.todosReducer,
    showCompleted: reducers.toggleShowCompletedReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}
