// Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .

const replaceString = string => `Tryber ${string} aqui!`

// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills.

const array = ['HTML', 'CSS', 'Javascript', 'Paid Advertising', 'Customer Service'];

// Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .

const sentence = (string, array) => `${replaceString(string)} Minhas cinco principais habilidades são: ${array.join(', ')}`;

console.log(sentence('Isabela', array));
