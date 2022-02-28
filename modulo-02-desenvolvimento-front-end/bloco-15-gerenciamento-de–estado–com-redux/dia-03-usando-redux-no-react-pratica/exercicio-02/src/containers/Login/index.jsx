import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLogin } from '../../store/actions';


class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    const { dispatch, history } = this.props;
    dispatch(setLogin(this.state));
    history.push('/customers');
  }

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <label htmlFor="email">
          Email:
          <input
            name="email"
            value={ email }
            onChange={ this.handleChange }
            type="text"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            name="password"
            value={ password }
            onChange={ this.handleChange }
            type="text"
          />
        </label>
        <button
          onClick={ this.handleSubmit }
          type="submit">
          Entrar
        </button>

      </div>
    )
  }
}

export default connect()(Login);
