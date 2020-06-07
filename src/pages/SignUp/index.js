import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import UsersService from 'services/users/';
import SignUpForm from 'components/SignUp/Form';

import { Wrapper } from './style';

class SignUpPage extends Component {
  constructor() {
    super();
    this.createUser = this.createUser.bind(this);
  }

  componentDidMount() {
    UsersService.hasCreatedUsers()
      .then((hasUsers) => {
        return hasUsers ? this.props.history.push('/wallet') : '';
      })
      .catch((err) => console.log(err));
  }

  createUser(user) {
    UsersService.create(user)
      .then(() => {
        this.props.history.push('/wallet');
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h2>Crypto Wallet</h2>
        <div>
          <p>Algum texto aqui falando sobre a aplicação</p>
        </div>
        <Wrapper>
          <SignUpForm handleCreateUser={this.createUser} />
        </Wrapper>
      </div>
    );
  }
}
export default withRouter(SignUpPage);
