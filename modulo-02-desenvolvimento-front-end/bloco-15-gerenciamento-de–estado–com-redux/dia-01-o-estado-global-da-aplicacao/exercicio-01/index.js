const ESTADO_INICIAL = {
  colors: ["white", "black", "red", "green", "blue", "yellow"],
  index: 0,
};

const getRandomColor = () => {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "NEXT_COLOR":
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };
    case "PREVIOUS_COLOR":
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      };
    case "RANDOM_COLOR":
      return {
        ...state,
        colors: [...state.colors, getRandomColor()],
        index: state.colors.length,
      }
    default:
      return state;
  }
};

document.getElementById("next").addEventListener("click", () => {
  store.dispatch({ type: "NEXT_COLOR" });
});

document.getElementById("previous").addEventListener("click", () => {
  store.dispatch({ type: "PREVIOUS_COLOR" });
});

document.getElementById("random").addEventListener('click', () => {
  store.dispatch({ type: "RANDOM_COLOR" });
})

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  const { colors, index } = store.getState();
  document.getElementById("value").innerHTML = colors[index];
  document.getElementById("container").style.backgroundColor = colors[index];
});
