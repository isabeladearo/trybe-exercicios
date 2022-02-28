import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setRegister } from '../../store/actions';

class Register extends Component {
  state = {
    name: '',
    age: '',
    email: '',
  }

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    const { dispatch, history } = this.props;
    dispatch(setRegister(this.state));
    history.push('/customers');
  }

  render() {
    const { name, age, email } = this.state;

    return (
      <div>
        <label htmlFor="name">
          Nome:
          <input
            name="name"
            value={ name }
            onChange={ this.handleChange }
            type="text" 
          />
        </label>
        <label htmlFor="age">
          Idade:
          <input
            name="age"
            value={ age }
            onChange={ this.handleChange }
            type="text" 
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            name="email"
            value={ email }
            onChange={ this.handleChange }
            type="text" 
          />
        </label>
        <button
          onClick={ this.handleSubmit }
          type="submit">
          Cadastrar
        </button>
        <Link to="/customers">Ver clientes cadastrados</Link>
      </div>
    )
  }
}

export default connect()(Register);
