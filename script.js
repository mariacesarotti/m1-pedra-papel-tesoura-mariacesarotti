/* Desenvolva seu código abaixo */

function playRockPaperScissor(player1, player2){
    let jogadorUm = player1;
    let jogadorDois = player2;

    if (jogadorUm === jogadorDois){
        return "Empate!";
    }else if(jogadorUm === "Pedra" && jogadorDois === "Tesoura"){
        return "Jogador 1 venceu!";
    }else if(jogadorUm === "Tesoura" && jogadorDois === "Papel"){
        return "Jogador 1 venceu!";
    }else if(jogadorUm === "Papel" && jogadorDois === "Pedra"){
        return "Jogador 1 venceu!";
    }else{
        return "Jogador 2 venceu!";
    }
}

const resultado = playRockPaperScissor("Pedra", "Tesoura");
console.log(resultado); // Saída: "Jogador 1 venceu!"