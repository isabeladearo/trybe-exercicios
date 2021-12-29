//07. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras: Porcentagem >= 90 -> A | Porcentagem >= 80 -> B | Porcentagem >= 70 -> C | Porcentagem >= 60 -> D | Porcentagem >= 50 -> E | Porcentagem < 50 -> F | O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = 4.5;

const porcentagemNota = nota * 10;

if (porcentagemNota > 100 || porcentagemNota < 0) {
    console.log('Erro: nota inválida.')
} else if (porcentagemNota >= 90) {
    console.log('Nota A');
} else if (porcentagemNota >= 80) {
    console.log('Nota B');
} else if (porcentagemNota >= 70) {
    console.log('Nota C'); 
} else if (porcentagemNota >= 60) {
    console.log('Nota D');
} else if (porcentagemNota >= 50) {
    console.log('Nota E');
} else {
    console.log('Nota F');
}
