//05. Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let highestNumber = 0;


for (let n of numbers) {
    if (n > highestNumber) {
        highestNumber = n;
    }
}

console.log(highestNumber);


