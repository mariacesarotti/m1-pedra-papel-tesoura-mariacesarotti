/* Desenvolva seu código abaixo */

function playRockPaperScissor(player1, player2){
    let jogadorUm = player1;
    let jogadorDois = player2;

    if (jogadorUm === jogadorDois){
        return "Empate!";
    }else if(
        (jogadorUm === "Pedra" && jogadorDois === "Tesoura") ||
        (jogadorUm === "Tesoura" && jogadorDois === "Papel") ||
        (jogadorUm === "Papel" && jogadorDois === "Pedra")
    ){
        return "Jogador 1 venceu!";
    }else{
        return "Jogador 2 venceu!";
    }
}

const resultado = playRockPaperScissor("Pedra", "Tesoura");
console.log(resultado);
