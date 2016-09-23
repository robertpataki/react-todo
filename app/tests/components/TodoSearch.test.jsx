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

  it('should should call `onSearch` when the user is typing', () => {
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoSearch));
    var $formEl = $($el.find('form')[0]);
    var input = $formEl.find('input[name="searchTerm"]')[0];

    var searchTerm = 'Hello World';

    input.value = searchTerm;
    TestUtils.Simulate.change(input);

    expect(spy).toHaveBeenCalledWith(searchTerm);
  });
});
