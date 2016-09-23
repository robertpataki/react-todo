var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
var expect = require('expect');

const TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', () => {
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch />);
    expect(todoSearch).toExist();
  });

  it('should should call `onSearch` with the `searchText` when the user is typing', () => {
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoSearch));
    var input = $el.find('input[name="searchText"]')[0];

    var searchText = 'Hello World';

    input.value = searchText;
    TestUtils.Simulate.change(input);

    expect(spy).toHaveBeenCalledWith(false, searchText);
  });

  it('should should call `onSearch` with the checked value of the `showCompleted` variable', () => {
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoSearch));
    var checkbox = $el.find('input[name="showCompleted"]')[0];

    checkbox.checked = 'checked';
    TestUtils.Simulate.change(checkbox);

    expect(spy).toHaveBeenCalledWith(true, '');
  });
});
