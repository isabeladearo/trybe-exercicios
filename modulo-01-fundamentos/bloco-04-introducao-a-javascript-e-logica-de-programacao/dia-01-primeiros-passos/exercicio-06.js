//06. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz. Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais. Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case). Se a peça passada for inválida, o programa deve retornar uma mensagem de erro. Exemplo: bishop (bispo) -> diagonals (diagonais)    

let nomeDaPeca = 'Dama';

const rei = 'O Rei anda apenas uma casa em qualquer direção.';
const rainha = 'A Rainha/Dama anda quantas casas quiser e em qualquer direção (reto ou na diagonal).';
const dama = 'A Rainha/Dama anda quantas casas quiser e em qualquer direção (reto ou na diagonal).';
const torre = 'A Torre anda para frente, para trás, para a direita ou para a esquerda quantas casas quiser.';
const bispo = 'O bispo anda na diagonal, para frente e para trás, quantas casas quiser.';
const cavalo = 'O Cavalo anda em L e pode pular as peças.';
const peao = 'O peão anda apenas para frente, apenas 1 casa e mata na diagonal.';

switch (nomeDaPeca.toLowerCase()) {
    case 'rei':
        console.log(rei);
        break;
    case 'rainha':
        console.log(rainha);
        break;
    case 'dama':
        console.log(rainha);
        break;
    case 'torre':
        console.log(torre);
        break;
    case 'bispo':
        console.log(bispo);
        break;
    case 'cavalo':
        console.log(cavalo);
        break;
    case 'peao':
        console.log(peao);
        break;
    default:
        console.log('Erro: nome da peça inválido.');
        break;
}