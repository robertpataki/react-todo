import React from 'react';

export const Main = React.createClass({
  render: function() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
});

export default Main;
