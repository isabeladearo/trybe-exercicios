//09. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

const numero1 = 4;
const numero2 = 6;
const numero3 = 8;

if (numero1 % 2 !== 0 || numero2 % 2 !== 0 || numero3 % 2 !== 0) {
    console.log('True, um dos três números é considerado ímpar.')
} else {
    console.log('False, números pares.');
}
