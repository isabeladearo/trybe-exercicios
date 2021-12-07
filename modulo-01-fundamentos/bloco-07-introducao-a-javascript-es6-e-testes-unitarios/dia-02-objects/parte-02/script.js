const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};
  
const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};
  
const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//01. Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addKey = (obj, key, value) => {
    obj[key] = value;
};

addKey(lesson2, 'turno', 'noite');
  
//02. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const showKeys = obj => Object.keys(obj);

console.log(showKeys(lesson1));

//03. Crie uma função para mostrar o tamanho de um objeto.

const showKeysLength = obj => Object.keys(obj).length;

console.log(showKeysLength(lesson1));

//04. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const showValues = obj => Object.values(obj);

console.log(showValues(lesson1));

//05. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);
