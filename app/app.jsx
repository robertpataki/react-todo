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
    console.log('User is logged in! ', user.uid);
    store.dispatch(actions.login(user.uid));
    hashHistory.push('/todos');
  } else {
    hashHistory.push('/');
    store.dispatch(actions.logout());
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
