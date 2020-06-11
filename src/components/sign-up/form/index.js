import React, { Component } from 'react';

import { FormElement, Button } from './style';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    };

    this.handleChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email } = this.state;
    const { handleCreateUser } = this.props;
    const user = {
      name,
      email,
    };
    handleCreateUser(user);
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <FormElement>
            <label htmlFor="nameImput">Nome</label>
            <input
              type="text"
              required
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              id="nameImput"
              placeholder="Nome Completo"
            />
          </FormElement>
          <FormElement>
            <label htmlFor="emailImput">E-Mail</label>
            <input
              type="email"
              required
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              id="emailImput"
              placeholder="E-mail"
            />
          </FormElement>
          <Button>Criar conta</Button>
        </form>
      </React.Fragment>
    );
  }
}

export default SignUpForm;
