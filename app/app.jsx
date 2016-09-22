var React = require('react');
var ReactDOM = require('react-dom');

// Load Foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <p>Boilerplate #3</p>,
  document.getElementById('app')
);
