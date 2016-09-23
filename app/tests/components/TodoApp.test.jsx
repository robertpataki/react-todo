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

  it('should add todo to the todos state on handleAppTodo', () => {
    var todoText = 'Test Text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({
      todos: []
    });

    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  });
  
  // describe('handleSearch', () => {
  //   it('should filter the todos to show only the ones containing the search string', () => {
  //     var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
  //     var initialTodos = [
  //       {
  //         id: 1,
  //         text: 'Hello World'
  //       }, {
  //         id: 2,
  //         text: 'Goodbye'
  //       }, {
  //         id: 3,
  //         text: 'Hello You'
  //       }
  //     ];
  //
  //     todoApp.setState({
  //       initialTodos: initialTodos,
  //       todos: initialTodos
  //     });
  //
  //     todoApp.handleSearch('Hello');
  //
  //     var todos = todoApp.state.todos;
  //
  //     expect(todos).toEqual([
  //       {
  //         id: 1,
  //         text: 'Hello World'
  //       }, {
  //         id: 3,
  //         text: 'Hello You'
  //       }
  //     ]);
  //   });
  // });
});
