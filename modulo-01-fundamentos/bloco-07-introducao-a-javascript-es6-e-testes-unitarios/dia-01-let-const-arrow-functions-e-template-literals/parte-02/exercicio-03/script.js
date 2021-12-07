// Crie uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão.

const clickCount = document.querySelector('#button-click');
let click = 0;

clickCount.addEventListener('click', () => {
  const counter = document.querySelector('#counter');
  counter.innerHTML = click += 1;
})
