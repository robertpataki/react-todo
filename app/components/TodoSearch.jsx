const React = require('react');

var TodoSearch = React.createClass({
  handleSearch: function() {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },

  render: function () {
    return (
      <div className="todo-search">
        <form>
          <input type="text" name="searchText" ref="searchText" placeholder="Ener keyword" onChange={this.handleSearch} />
          <label><input type="checkbox" name="showCompleted" ref="showCompleted" onChange={this.handleSearch}/>Show Completed Todos</label>
        </form>
      </div>
    );
  }
});

module.exports = TodoSearch;
