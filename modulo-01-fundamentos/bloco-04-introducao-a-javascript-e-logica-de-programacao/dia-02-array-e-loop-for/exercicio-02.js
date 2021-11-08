//02. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

//********* Resolução 1:

// for (var n = 0; n < numbers.length; n += 1) {
//     result = numbers[n] + result;
// }
// console.log(result);

//********* Resolução 2:

// for (let n of numbers) {
//     result = n + result;
// }
// console.log(result);

for (let n of numbers) {
    result += n;
}
console.log(result);