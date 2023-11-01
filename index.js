//Desafio de código 1 - Proressão do Heroi
//Usar uma estrutura de decisão para dar uma classificação ao nível de XP do Heroi

let Heroi = "Valdemiro";
let Classes = ["Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];
let xp = 0;

let x = Math.floor(Math.random()*21);

for(let i=1;i<=x;i++){
    xp += 500;
}

console.log(xp);