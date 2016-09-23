const React = require('react');
const moment = require('moment');

var Todo = React.createClass({
  handleClick: function() {
    var {id} = this.props;
    this.props.onToggle(id);
  },

  render: function() {
    var {id, text, completed, createdAt, completedAt} = this.props;

    var renderDate = () => {
      var message = completed ? 'Completed ' : 'Created ';
      var timestamp = completed ? completedAt : createdAt;
      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    }

    return (
      <label className={"todo todo-" + id} onClick={this.handleClick}>
        <input type="checkbox" defaultChecked={completed} />
        <p>{text}</p>
        <p>{renderDate()}</p>
      </label>
    )
  }
});

module.exports = Todo;
