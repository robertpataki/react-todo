import expect from 'expect';
import * as actions from 'actions';

describe('Actions', () => {
  it('should generate search text action', () => {
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text',
    };

    const response = actions.setSearchText(action.searchText);
    expect(response).toEqual(action);
  });

  it('should generate add todo action', () => {
    const action = {
      type: 'ADD_TODO',
      todo: {
        id: 'abc123',
        text: 'Something to do',
        completed: false,
        createdAt: 0,
      }
    };

    const response = actions.addTodo(action.todo);
    expect(response).toEqual(action);
  });

  it('should generate add todos action', () => {
    const action = {
      type: 'ADD_TODOS',
      todos: [
        {id: 1, text: 'Blah', createdAt: 100, completed: false, completedAt: undefined},
        {id: 2, text: 'Meh', createdAt: 200, completed: true, completedAt: 400}
      ]
    };

    const response = actions.addTodos(action.todos);
    expect(response).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    const response = actions.toggleShowCompleted();
    expect(response).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    const action = {
      type: 'TOGGLE_TODO',
      id: 2
    };

    const response = actions.toggleTodo(action.id);
    expect(response).toEqual(action);
  });
});
