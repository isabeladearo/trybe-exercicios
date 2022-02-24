const ESTADO_INICIAL_1 = {
  nome: "Rodrigo",
  sobrenome: "Santos da Silva",
  endereco: "Rua Soldado Mathias, 765",
  cidade: "Belo Horizonte",
};

const ESTADO_INICIAL_2 = {
  nome: "Bruna",
  sobrenome: "Santana Oliveira",
  endereco: "Rua Holanda, 332",
  cidade: "São Paulo",
};

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case "UPDATE_FIRST_USER": 
      return {
        ...state,
        nome: action.nome,
        sobrenome: action.sobrenome,
      };
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case "UPDATE_SECOND_USER": 
      return {
        ...state,
        nome: action.nome,
        sobrenome: action.sobrenome,
      };
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({ meuPrimeiroReducer, meuSegundoReducer });

const store = Redux.createStore(rootReducer);

window.onload = () => {
  setInterval(() => {
    store.dispatch({
      type: 'UPDATE_FIRST_USER',
      nome: 'Gabriela',
      sobrenome: 'Pereira'
    });
    store.dispatch({
      type: 'UPDATE_SECOND_USER',
      nome: 'Roberto',
      sobrenome: 'Silva'
    }) 
  }, 2000);
}

store.subscribe(() => {
  const { meuPrimeiroReducer, meuSegundoReducer } = store.getState();
  document.getElementById("nome-1").innerText = meuPrimeiroReducer.nome;
  document.getElementById("sobrenome-1").innerText = meuPrimeiroReducer.sobrenome;

  document.getElementById("nome-2").innerText = meuSegundoReducer.nome;
  document.getElementById("sobrenome-2").innerText = meuSegundoReducer.sobrenome;
})