var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();

    var todoText = this.refs.todoText.value;

    if(todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    }

    this.refs.todoText.focus();
  },

  render: function() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="add-todo">
          <input type="text" ref="todoText" placeholder="What's next" />
          <button type="submit" className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
