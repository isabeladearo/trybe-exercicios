// Crie uma função que receba um número e retorne seu fatorial.

const factorial = number => number === 0 ? 1: number * factorial(number - 1);

console.log(factorial(number));