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
          text: 'Finish Todo List app session',
          completed: false
        }, {
          id: uuid(),
          text: 'Do the washing up',
          completed: true
        }, {
          id: uuid(),
          text: 'Meditate',
          completed: true
        }, {
          id: uuid(),
          text: 'Watch Stranger Things',
          completed: false
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
          text: todoText,
          completed: false
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

  handleToggle: function(id) {
    console.log('[TodoApp] - handleToggle() - id: ', id);

    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({
      todos: updatedTodos
    });
  },

  render: function() {
    var {todos} = this.state;

    return (
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          <h1 className="page-title text-center">Todo App</h1>
          <TodoSearch onSearch={this.handleSearch}/>
          <TodoList todos={todos} onToggle={this.handleToggle}/>
          <AddTodo onAddTodo={this.handleAddTodo}/>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
