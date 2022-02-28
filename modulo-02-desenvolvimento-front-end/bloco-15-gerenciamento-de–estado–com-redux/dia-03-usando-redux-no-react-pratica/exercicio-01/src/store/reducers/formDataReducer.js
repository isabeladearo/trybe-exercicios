import { SET_DATA } from '../actions';

const INITIAL_STATE = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
  curriculo: '',
  cargo: '',
  descricao: '',
};

const formDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_DATA:
    return { ...state, ...action.payload };
  default:
    return state;
  }
};

export default formDataReducer;
