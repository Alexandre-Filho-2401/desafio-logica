//Desafio de código 1 - Proressão do Heroi
//Usar uma estrutura de decisão para dar uma classificação ao nível de XP do Heroi

let Heroi = "Valdemiro";
let Classe;
let xp = 0;

//Estabeleço um número aleatório de vezes em que pode ser adicionado xp ao herói suficiente para chegar a classe mais alta
let x = Math.floor(Math.random()*25);

//Para cada vez em que xp for adicionado, ele contabilizará na sua "barra" de experiência
for(let i=1;i<=x;i++){
    xp += 500;
}

switch(xp){
    case xp<1000:
        Classe = "Ferro";
        break
    case xp>1001 && xp<2000:
        Classe = "Bronze";
        break
    case xp>2001 && xp<5000:
        Classe = "Prata";
        break
    case xp>5001 && xp<7000:
        Classe = "Ouro";
        break
    case xp>7001 && xp<8000:
        Classe = "Platina";
        break
    case xp>8001 && xp<9000:
        Classe = "Ascendente";
        break
    case xp>9001 && xp<10000:
        Classe = "Imortal";
        break
    case xp>10001:
        Classe = "Radiante"
        break
    default:
        console.log("Tá jogando o jogo, mano?");
}

console.log("O heroi "+Heroi+" está no nivel "+Classe);