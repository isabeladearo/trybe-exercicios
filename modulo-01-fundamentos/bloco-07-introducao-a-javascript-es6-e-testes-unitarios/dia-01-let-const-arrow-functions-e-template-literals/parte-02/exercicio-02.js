// Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = string => {
  const splitString = string.split(' ');
  const sortString = splitString.sort((a, b) => (b.length) - a.length);
  return sortString[0];
}

console.log(longestWord(string));