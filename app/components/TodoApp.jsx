const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      searchText: '',
      showCompleted: false,
      initialTodos: [
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
      ],

      todos: []
    }
  },

  componentWillMount: function() {
    this.setState({
      todos: this.state.initialTodos
    });
  },

  handleAddTodo: function(todoText) {
    var updatedTodos = this.state.todos;
    updatedTodos.push({
      id: updatedTodos.length + 1,
      text: todoText
    });

    this.setState({
      todos: updatedTodos
    });
  },

  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText
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
