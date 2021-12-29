//01.  Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 

let square = 5
let symbol = '*';
let lineInput = '';

for (let n = 0; n < square; n += 1) {
    lineInput = lineInput + symbol;
}
for (let n = 0; n < square; n += 1) {
    console.log(lineInput);
}




