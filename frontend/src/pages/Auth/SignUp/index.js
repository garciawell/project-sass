import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, SignForm } from '../styles';
import Button from '~/styles/components/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AuthActions } from '~/store/ducks/auth';

class SignUp extends Component {
  static propTypes = {
    signUpRequest: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
    name: '',
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, name } = this.state;
    const { signUpRequest } = this.props;
    signUpRequest(name, email, password);
  };

  render() {
    const { email, password, name } = this.state;

    return (
      <Container>
        <SignForm onSubmit={this.handleSubmit}>
          <h1>Criar Conta</h1>

          <span>NOME</span>
          <input name="name" value={name} onChange={this.handleInputChange} />

          <span>E-MAIL</span>
          <input type="email" name="email" value={email} onChange={this.handleInputChange} />
          <span>SENHA</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
          />

          <Button size="big" type="submit">
            Entrar
          </Button>
        </SignForm>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(SignUp);
