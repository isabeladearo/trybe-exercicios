// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = oddsAndEvens => {
  const sortedOddsAndEvens = oddsAndEvens.sort((a, b) => a - b);
  return sortedOddsAndEvens;
}

const sortedNumbers = sortOddsAndEvens(oddsAndEvens);

console.log(`Os números ${sortedNumbers} se encontram ordenados de forma crescente!`); 