const expect = require('expect');
const {searchTextReducer, toggleShowCompletedReducer} = require('reducers');
const df = require('deep-freeze-strict');

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
});
