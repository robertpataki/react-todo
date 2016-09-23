var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
var expect = require('expect');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call `onAddTodo` with a non-empty string', () => {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);

    var $el = $(ReactDOM.findDOMNode(addTodo));
    var formEl = $($el.find('form'))[0];
    var todoInput = $(formEl).find('input')[0];

    var todoText = 'Adding a new todo';
    todoInput.value = todoText;

    TestUtils.Simulate.submit(formEl);

    expect(todoInput.value).toBe('');
    expect(spy).toHaveBeenCalledWith(todoText);
  });

  it('should not call `onAddTodo` with an empty string', () => {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);

    var $el = $(ReactDOM.findDOMNode(addTodo));
    var formEl = $($el.find('form'))[0];
    var todoInput = $(formEl).find('input')[0];

    var todoText = '';
    todoInput.value = todoText;

    TestUtils.Simulate.submit(formEl);

    expect(todoInput.value).toBe('');
    expect(spy).toNotHaveBeenCalled();
  });
});
