import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

export const TodoSearch = React.createClass({
  render: function () {
    const { dispatch, showCompleted, searchText } = this.props;

    return (
      <div className="container__header">
        <div>
          <input type="text" name="searchText" ref="searchText" placeholder="Ener keyword" value={ searchText } onChange={() => {
            const searchText = this.refs.searchText.value;
            dispatch(actions.setSearchText(searchText));
          }} />
        </div>
        <div>
          <label><input type="checkbox" name="showCompleted" ref="showCompleted" defaultChecked={ showCompleted } onChange={() => {
            dispatch(actions.toggleShowCompleted());
          }} />Show Completed Todos</label>
        </div>
      </div>
    );
  }
});

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText,
    }
  }
)(TodoSearch);
