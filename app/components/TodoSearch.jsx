const React = require('react');

var TodoSearch = React.createClass({
  onSearch: function(e) {
    var searchTerm = this.refs.searchTerm.value;
    this.props.onSearch(searchTerm);
  },

  render: function () {
    return (
      <div className="todo-search">
        <form>
          <input type="text" name="searchTerm" ref="searchTerm" placeholder="Ener keyword" onChange={this.onSearch} />
          <label><input type="checkbox" name="todoFilter" ref="todoFilter"/>Show Completed Todos</label>
        </form>
      </div>
    );
  }
});

module.exports = TodoSearch;
