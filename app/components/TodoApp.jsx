const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');
const uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      searchText: '',
      showCompleted: false,
      todos: [
        {
          id: uuid(),
          text: 'Eat dinner'
        }, {
          id: uuid(),
          text: 'Find Amy'
        }, {
          id: uuid(),
          text: 'Go to bed'
        }, {
          id: uuid(),
          text: 'Watch something on Youtube'
        }, {
          id: uuid(),
          text: 'Do some more React'
        }
      ]
    }
  },

  handleAddTodo: function(todoText) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: todoText
        }
      ]
    });
  },

  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },

  render: function() {
    var {todos} = this.state;

    return (
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          <h1 className="page-title text-center">Todo App</h1>
          <TodoSearch onSearch={this.handleSearch}/>
          <TodoList todos={todos} />
          <AddTodo onAddTodo={this.handleAddTodo}/>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
