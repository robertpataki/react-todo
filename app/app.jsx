import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory } from 'react-router';

import * as configureStore from 'configureStore';
import * as actions from 'actions';
import firebase from 'app/firebase/';
import router from 'app/router/';

// Authentication state based redirects
firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    hashHistory.push('/todos');
  } else {
    hashHistory.push('/');
  }
});

// Load Foundation
$(document).foundation();
// App css
require('style!css!sass!applicationStyles');

// Redux Store setup
const store = configureStore.configure();
store.dispatch(actions.startAddTodos());

ReactDOM.render(
  <Provider store={ store }>
    { router }
  </Provider>,
  document.getElementById('app')
);
