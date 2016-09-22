var React = require('react');
var ReactDOM = require('react-dom');

var TodoApp = require('TodoApp');

// Load Foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
