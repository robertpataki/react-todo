import React from 'react';
import { connect } from 'react-redux';

import * as actions from 'actions';

export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.onLogin = this.onLogin.bind(this);
  }

  onLogin() {
    const { dispatch } = this.props;
    dispatch(actions.startLogin());
  }

  render() {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="columns small-centered small-11 medium-6 large-4">
            <div className="callout callout-auth">
              <h2>Log in</h2>
              <p>Login with Github account below.</p>
              <button className="button" onClick={ this.onLogin }>Login with Github</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Login);
