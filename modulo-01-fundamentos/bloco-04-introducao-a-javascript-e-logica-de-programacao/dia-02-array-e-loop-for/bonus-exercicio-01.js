//BÔNUS - Ordenação Bubble Sort
//01. Ordene o array numbers em ordem crescente e imprima seus valores;


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let n = 1; n < numbers.length; n += 1) {
    for (let secondN = 0; secondN < n; secondN += 1) { 
        if (numbers[n] < numbers[secondN]) {
            //Troca das posições
            let position = numbers[n]; 
            numbers[n] = numbers[secondN];
            numbers[secondN] = position;
        } 
    }
}

console.log(numbers);
