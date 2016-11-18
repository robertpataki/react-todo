import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

// Raw component
export const Todo = React.createClass({
  handleClick: function() {
    const { id, dispatch } = this.props;

    this.refs.checkbox.checked = this.refs.checkbox.checked ? false : true;

    dispatch(actions.startToggleTodo(id, this.refs.checkbox.checked));
  },

  render: function() {
    const { id, text, completed, createdAt, completedAt } = this.props;
    const todoClassName = completed ? 'todo todo-completed' : 'todo';

    const renderDate = () => {
      const message = completed ? 'Completed ' : 'Created ';
      const timestamp = completed ? completedAt : createdAt;

      return message + moment.unix(timestamp).fromNow();
    }

    return (
      <div className={todoClassName} onClick={this.handleClick}>
        <div>
          <input type="checkbox" ref="checkbox" defaultChecked={ completed } />
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
});

// Reduxed component
export default connect()(Todo);
