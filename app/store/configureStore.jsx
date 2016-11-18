import * as redux from 'redux';
import thunk from 'redux-thunk';

import { searchTextReducer, todosReducer, toggleShowCompletedReducer } from 'reducers';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    todos: todosReducer,
    showCompleted: toggleShowCompletedReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}
