// 05. Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = () => {
  return names.reduce((acc, name) => 
    acc + name.split('').reduce((acc, letter) => { 
      if (letter === 'a' || letter === 'A') return acc + 1;
      return acc;
  }
  , 0), 0);
};

console.log(containsA());

