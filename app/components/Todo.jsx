var React = require('react');

var Todo = React.createClass({
  render: function() {
    var {id, text} = this.props;

    return (
      <div className={"todo todo-" + id}><span>{id}.</span> <span>{text}</span></div>
    )
  }
});

module.exports = Todo;
