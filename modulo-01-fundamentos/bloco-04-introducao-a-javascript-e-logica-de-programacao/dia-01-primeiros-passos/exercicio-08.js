//08. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

const numero1 = 3;
const numero2 = 5;
const numero3 = 7;

if (numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0) {
    console.log('True, um dos três números é considerado par.')
} else {
    console.log('False, números ímpares');
}
