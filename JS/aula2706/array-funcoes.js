
let nums = [];
console.log(nums);
// Adiciona elemento
nums.push(4);
nums.push(3);
nums.push(10);
console.log(nums);
nums.push(1000)
console.log(nums);

// Removendo o ultimo elemento
nums.pop();
nums.pop();
console.log(nums);

// Inserir no iníco
let notas = [6.5, 7.9, 9.0];
console.log(notas);
notas.unshift(8.0);
notas.unshift(4.5);
notas.unshift(7.0);
console.log(notas);


// Remove do início
notas.shift();
notas.shift()
console.log(notas);

// Juntar o array e montar uma string
let enderecoIP = [192, 168, 1, 1]
console.log(enderecoIP.join("."));

let data = ["27", "06", "2024" ];
let dataString = data.join("/");
console.log(dataString);


// Concatenar arrays
let p1 = ["Mouse", "Monitor", "Microfone"];
let p2 = ["Webcam", "Teclado"];

let p3 = p1.concat(p2); //Novo array com os dois combinados
console.log(p3);


// Array reverso
let n = [1,2,3];
let nIvertido = n.reverse();
console.log(nIvertido);


// Includes
let pessoas = ["Joao", "jose", "Ana"];

if(pessoas.includes("jose")) {
    console.log("jose está presente!");
}else{
    console.log("jose não está presente!");
}

// Split
let frase = "Eu vou estudar React";
let dataInicio = "26/06/2024";
let palavraEspecial = "BATATA";

let fraseArray = frase.split(" ");
console.log(fraseArray);

let dataArray = dataInicio.split("/");
console.log(dataArray);


// Inverter a string
console.log(palavraEspecial.split(""));
console.log(palavraEspecial.split("").reverse());
console.log(palavraEspecial.split("").reverse().join(""));

// indexOf -> retornar o índice de um elemento
let figuras = ["coração", "estrela", "ok", "não", "joinha", "sorriso"];

//console.log(figuras.indexOf("ok"));
// console.log(figuras.indexOf("joinha"));
// console.log(figuras.indexOf("batata")); // -1 -> não encontrou o elemento no array

let fig1 = figuras.slice(2, 6);
console.log(fig1);

// pega o ultimo
let figuras = ["coração", "estrela", "ok", "não", "joinha", "sorriso"];
let fig1 = figuras.slice(-1);
console.log(figuras[figuras.length -1]);
console.log(fig1);

let text = "Hello world";
let result = text.endsWith("ld");
console.log(result);

