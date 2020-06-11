import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import UsersService from 'services/users/';
import SignUpForm from 'components/sign-up/form';

import { Wrapper, Title, Container, ApplicationContent } from './style';

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
      <Container>
        <Title>Crypto Wallet</Title>
        <div>
          <ApplicationContent>
            Bem-vindo ao seu controle de crypto moedas. Crie sua conta e depois
            gerencia as suas moedas virtuais.
          </ApplicationContent>
        </div>
        <Wrapper>
          <h2 className="form__title">Preencha os campos abaixo</h2>
          <SignUpForm handleCreateUser={this.createUser} />
        </Wrapper>
      </Container>
    );
  }
}
export default withRouter(SignUpPage);
