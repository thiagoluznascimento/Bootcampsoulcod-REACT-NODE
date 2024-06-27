// 1. Escreva um programa que inverte uma string

let frase = "Olá mundo"
let novaFrase = ""

for (let i = frase.length -1; i >=0 ; i--){
    novaFrase += frase[i]
}
console.log(novaFrase)


// 2. Crie uma variável que armazena uma frase, e utilize as funcionalidades de string para remover uma palavra específica da frase e trocar por "###"
let frase1 = "Você é muito feio, mais feio que doi..!"
let fraseCensurada = frase1.replaceAll("feio", "****");
console.log(fraseCensurada);



// 3. Crie uma variável que armazena um email, o programa deve indicar se este email é do domínio soulcode.com

const emailThiago = "thiagoluz@gmail.com"

if(emailThiago.endsWith("gmail.com")){
    console.log("Este e-mail pertence a Thiago");
} else{
    console.log("Este e-mail não pertence a Thiago");
}

let frase2 = "Eu jogo LOL e Valorant, LOL é top";
let fraseCensurada2 = frase2.replaceAll("LOL", "*******");

console.log(fraseCensurada2);