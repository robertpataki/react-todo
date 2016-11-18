import expect from 'expect';
import { searchTextReducer, toggleShowCompletedReducer, todosReducer } from 'reducers';
import df from 'deep-freeze-strict';
import moment from 'moment';

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('set searchText', () => {
      const action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Searching for...'
      };

      const response = searchTextReducer(df(''), df(action));
      expect(response).toEqual(action.searchText);
    });
  });

  describe('toggleShowCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      const response = toggleShowCompletedReducer(df(false), df(action));
      expect(response).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      const action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'New todo to be done later',
          completed: false,
          createdAt: 1234,
        }
      }

      const response = todosReducer(df([]), df(action));
      expect(response.length).toBe(1);
      expect(response[0]).toEqual(action.todo);
    });

    it('should toggle todo', () => {
      const todos = [{
        id: '123',
        text: 'Todo #1',
        createdAt: 123,
        completed: true,
        completedAt: 125,
      }];
      const updates = {
        completed: false,
        completedAt: null,
      };
      const action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };

      const response = todosReducer(df(todos), df(action));

      expect(response[0].completed).toBe(updates.completed);
      expect(response[0].completedAt).toEqual(updates.completedAt);
      expect(response[0].text).toEqual(todos[0].text);
    });

    it('should add existing todos', () => {
      const action = {
        type: 'ADD_TODOS',
        todos: [
          { id: 1, text: 'Blah', createdAt: 100, completed: false, completedAt: undefined }
        ]
      };

      const response = todosReducer(df([]), df(action));
      expect(response.length).toEqual(1);
      expect(response[0]).toEqual(action.todos[0]);
    });
  });
});
