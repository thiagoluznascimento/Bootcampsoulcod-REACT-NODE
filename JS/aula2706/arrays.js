// Array => armazenar múltiplos valores/itens/elementos
// [] -> vazio
// [1,2,3,4,5] -> preenchido
// ["batata," "batata doce"] -> com strings
// ["batata", 1, "um objeto"]

let figuras = ["coração", "estrela", "ok", "não", "joinha", "sorriso"];
console.log(figuras);

let numeros = [1, 2.3, 5.4, 7.5, 9];
console.log(numeros);

// Acessando um elemento
console.log(figuras[1]);
console.log(figuras[5]);
console.log(numeros[4]);
console.log(numeros[400]); // undefined

let notas = [6.5, 6.3, 4.2]
console.log("Antes: " + notas);
notas[1] = 8.5;
notas[2] = notas[2] + 0.5;
notas[0]++; // notas [0] = notas[0] + 1
console.log("Depois: " + notas);

// Tamanho (length)
let arr1 = [];
let arr2 = [1,2,3,4];

console.log(arr1.length);
console.log(arr2.length);

// Percorrer array
let arrs = [1,2,3,4];

for(let i = 0; i < arrs.length; i++) {
    console.log(arrs[i])
}


// Para percorrer os indices
let batatas = ["teste","batatadoce",3,4, "outro"];

for (batata in batatas){
    console.log(batata);
}


let alunos = ["Thiago", "Joao", "Ana", "Alberto"];
console.log(alunos.length);
for(let i = 0; i < alunos.length; i++) {
    console.log(`O aluno ${i} é ${alunos}`);
}


// For-of   msm coisa do in no python   para percorrer os elementos
let frutas = ["banana", "maracuja", "morango" ]

for (fruta of frutas) {
    console.log(fruta);
}
