import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteRegister } from '../../store/actions';

class Customers extends Component {
  state = {
    ordered: false,
  }

  generateCustomersList = (customers) => {
    const { dispatch } = this.props;
    return customers.map((register, i) => (
      <div key={ i }>
        <button
          onClick={ () => dispatch(deleteRegister(register)) }
          type="submit"
        >
          X
        </button>
        <p>ID: { i + 1 }</p>
        <p>Nome: { register.name }</p>
        <p>Idade: { register.age }</p>
        <p>Email: { register.email }</p>
      </div>
    ));
  }

  orderList = (customers) => {
    const ordered = customers.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    else return 0;
    })
    return ordered;
  }

  render() {
    const { login: { email }, customers } = this.props; 
    const { ordered } = this.state;

    return (
      <>
      { !email ? <p>Login não efetuado</p> : (
        <>
          { !customers.length ? (
            <div>
              <p>Nenhum cliente cadastrado</p>
              <Link to='/register'>Cadastre</Link>
            </div>
          ) : (
            <div>
              <button
                onClick={ () => this.setState((prevState) => ({ ordered: !prevState.ordered })) }
                type="submit">
                Ordenar
              </button>
              { this.generateCustomersList(ordered ? this.orderList(customers) : customers) }
              <Link to='/register'>Faça um novo cadastro</Link>
            </div>
          ) }
        </>
      )}
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  login: state.login,
  customers: state.customers,
});

export default connect(mapStateToProps)(Customers);
