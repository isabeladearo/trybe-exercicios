//06. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNumbers = 0;


for (let n of numbers) {
    if (n % 2 !== 0) {
        oddNumbers += 1;
    }
}

if (oddNumbers >= 1) {
    console.log(oddNumbers);
} else {
    console.log('Nenhum valor ímpar encontrado');
}

