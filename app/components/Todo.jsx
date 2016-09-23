var React = require('react');

var Todo = React.createClass({
  handleClick: function() {
    var {id} = this.props;
    this.props.onToggle(id);
  },

  render: function() {
    var {id, text, completed} = this.props;

    return (
      <label className={"todo todo-" + id} onClick={this.handleClick}>
        <input type="checkbox" defaultChecked={completed} />
        {text}
      </label>
    )
  }
});

module.exports = Todo;
