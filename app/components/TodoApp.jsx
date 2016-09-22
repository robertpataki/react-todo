var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: 'Eat dinner'
        }, {
          id: 2,
          text: 'Find Amy'
        }, {
          id: 3,
          text: 'Go to bed'
        }, {
          id: 4,
          text: 'Watch something on Youtube'
        }, {
          id: 5,
          text: 'Do some more React'
        }
      ]
    }
  },

  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <h1>Todo App</h1>
        <TodoList todos={todos} />
      </div>
    );
  }
});

module.exports = TodoApp;
