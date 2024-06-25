// 1. Crie uma variável que armazene uma temperatura em Fahrenheit, e realize a conversão para Celsius.
// A equação para realizar a conversão é: C = (F - 32) / 1.8

// 2. Crie cinco variáveis que representam cinco notas de um estudante.
// Calcule a média ponderada, sabendo que o peso das notas são respectivamente: 3, 2, 1, 4 e 5.

// 1
let fahre = 100;
let cel = (fahre - 32) / 1.8;
console.log("A temperatura em celsius é: " + cel.toFixed(2) + " °C")

// 2
// Notas do estudante
let nota1 = 8; // Peso 3
let nota2 = 7; // Peso 2
let nota3 = 9; // Peso 1
let nota4 = 6; // Peso 4
let nota5 = 10; // Peso 5

// Pesos
let peso1 = 3;
let peso2 = 2;
let peso3 = 1;
let peso4 = 4;
let peso5 = 5;

// Calculando a soma dos produtos das notas pelos pesos
let somaNotasPesos = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3) + (nota4 * peso4) + (nota5 * peso5);

// Soma dos pesos
let somaPesos = peso1 + peso2 + peso3 + peso4 + peso5;

// Calculando a média ponderada
let mediaPonderada = somaNotasPesos / somaPesos;

console.log("A média ponderada é de: " + mediaPonderada.toFixed(2));

// Outra forma de fazer
let n1 = 9.5; //peso 3
let n2 = 7.6; // peso 2
let n3 = 6.0; // peso 1
let n4 = 5.2; //peso 4
let n5 = 6.8; // peso 5

let mediaponderada = (n1 * 3 + n2 * 2 + n3 * 1 + n4 * 4 + n5 * 5) / 15;
console.log("A média ponderada é: " + mediaponderada.toFixed(2))
