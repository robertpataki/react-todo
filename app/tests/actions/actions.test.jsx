import expect from 'expect';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as actions from 'actions';

const createMockStore = configureMockStore([thunk]);

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

  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore();
    const todoText = 'This is the text for new todo item';

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      const firstAction = actions[0];
      expect(firstAction).toInclude({
        type: 'ADD_TODO'
      });

      expect(firstAction).toInclude({
        todo: {
          text: todoText
        }
      });

      done();
    }).catch(done);
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

  it('should generate update todo action', () => {
    const action = {
      type: 'UPDATE_TODO',
      id: '123',
      updates: {
        completed: false
      }
    };

    const response = actions.updateTodo(action.id, action.updates);
    expect(response).toEqual(action);
  });
});
