var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
var expect = require('expect');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  describe('handleAddTodo', () => {
    it('should create a new Todo item', () => {
      var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
      var todos = todoApp.state.todos;
      var newTodoText = 'New Todo text';
      var oldTodosCount = todos.length;

      todoApp.handleAddTodo(newTodoText);
      var updatedTodosCount = todos.length;

      expect(oldTodosCount).toBe(updatedTodosCount - 1);
      expect(todos[updatedTodosCount - 1].text).toBe(newTodoText);
    });
  });
});
