var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();

    var text = this.refs.todo.value;

    if(text.length > 0) {
      this.refs.todo.value = '';
      this.props.onAddTodo(text);
    }
  },

  render: function() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="add-todo">
          <input type="text" ref="todo" placeholder="What's next" />
          <button type="submit" className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
