const expect = require('expect');

const TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  it('it should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    beforeEach(() => {
      localStorage.removeItem('todos');
    });

    it('should set valid todos array', () => {
      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];

      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      TodoAPI.setTodos();
      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toBe(null);

      TodoAPI.setTodos('');
      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toBe(null);

      TodoAPI.setTodos({a: 'b'});
      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localstorage data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return array if valid array in localstorage', () => {
      var todos = [{
        id: 23,
        test: 'test all files',
        completed: false
      }];

      localStorage.setItem('todos', JSON.stringify(todos));

      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);
    });
  });
});
