import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormDataDisplay extends Component {
  render() {
    const { data: {
      nome, email, cpf, endereco, cidade, estado, curriculo, cargo, descricao },
    } = this.props;

    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          { nome }
        </div>
        <div>
          Email:
          { email }
        </div>
        <div>
          CPF:
          { cpf }
        </div>
        <div>
          Endereço:
          { endereco }
        </div>
        <div>
          Cidade:
          { cidade }
        </div>
        <div>
          Estado:
          { estado }
        </div>
        <div>
          Currículo:
          { curriculo }
        </div>
        <div>
          Cargo:
          { cargo }
        </div>
        <div>
          Descrição do cargo:
          { descricao }
        </div>
      </div>
    );
  }
}

FormDataDisplay.propTypes = {
  data: PropTypes.objectOf({
    nome: PropTypes.string,
    email: PropTypes.string,
    cpf: PropTypes.string,
    endereco: PropTypes.string,
    cidade: PropTypes.string,
    estado: PropTypes.string,
    curriculo: PropTypes.string,
    cargo: PropTypes.string,
    descricao: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps)(FormDataDisplay);
