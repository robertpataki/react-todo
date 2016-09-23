const React = require('react');

var TodoSearch = React.createClass({
  handleSearch: function() {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },

  render: function () {
    return (
      <div className="container__header">
        <div>
          <input type="text" name="searchText" ref="searchText" placeholder="Ener keyword" onChange={this.handleSearch} />
        </div>
        <div>
          <label><input type="checkbox" name="showCompleted" ref="showCompleted" onChange={this.handleSearch}/>Show Completed Todos</label>
        </div>
      </div>
    );
  }
});

module.exports = TodoSearch;
