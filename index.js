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

switch(true){
    case xp<=1000:
        Classe = "Ferro";
        break
    case xp<=2000:
        Classe = "Bronze";
        break
    case xp<=5000:
        Classe = "Prata";
        break
    case xp<=7000:
        Classe = "Ouro";
        break
    case xp<=8000:
        Classe = "Platina";
        break
    case xp<=9000:
        Classe = "Ascendente";
        break
    case xp<=10000:
        Classe = "Imortal";
        break
    default:
        Classe = "Radiante"
        break
}

console.log("O heroi de nome "+Heroi+" está no nivel de "+Classe);