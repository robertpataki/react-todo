import expect from 'expect';
import { searchTextReducer, toggleShowCompletedReducer, todosReducer } from 'reducers';
import df from 'deep-freeze-strict';
import moment from 'moment';

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Searching for...'
      };

      var response = searchTextReducer(df(''), df(action));
      expect(response).toEqual(action.searchText);
    });
  });

  describe('toggleShowCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var response = toggleShowCompletedReducer(df(false), df(action));
      expect(response).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'New todo to be done later',
          completed: false,
          createdAt: 1234,
        }
      }

      var response = todosReducer(df([]), df(action));
      expect(response.length).toBe(1);
      expect(response[0]).toEqual(action.todo);
    });

    it('should toggle todo', () => {
      var action = {
        type: 'TOGGLE_TODO',
        id: 1
      }
      var todos = [{
        id: 1,
        text: 'Todo #1',
        createdAt: 123,
        completedAt: 125,
        completed: true
      }, {
        id: 2,
        text: 'Todo #2',
        createdAt: 321,
        completedAt: 322,
        completed: true
      }, {
        id: 3,
        text: 'Todo #3',
        createdAt: 333,
        completedAt: undefined,
        completed: false
      }];

      var response = todosReducer(df(todos), df(action));

      expect(response[0].completed).toBe(false);
      expect(response[0].completedAt).toEqual(undefined);
    });

    it('should add existing todos', () => {
      var action = {
        type: 'ADD_TODOS',
        todos: [
          {id: 1, text: 'Blah', createdAt: 100, completed: false, completedAt: undefined}
        ]
      };

      var response = todosReducer(df([]), df(action));
      expect(response.length).toEqual(1);
      expect(response[0]).toEqual(action.todos[0]);
    });
  });
});
