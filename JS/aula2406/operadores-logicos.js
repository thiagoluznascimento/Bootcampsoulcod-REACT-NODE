/*
Operadores lógicos -> boolean
&& -> E (AND)
|| -> OU (OR)
! -> Ñ (NOT)

// Ordem de prioridade: ! > && > ||
*/

// console.log(true)
// console.log(true)

// AND (&&) *
// console.log(true && true) // true
// console.log(true && true) // false
// console.log(true && true && false) // false
// console.log(false && true) // false

// OR (||) +
// console.log(true || true) // true
// console.log(true || false) // true
// console.log(true || false || false || false) // true
// console.log(false || false) // false

// NOT (!) * -1
// console.log(!true) //false
// console.log(!false) //false

// Ordem de prioridade: ! > && > ||
// console.log(!true || false) //false
// console.log(true || true && false) // true
// console.log(!false && true || false) // true

let idade = 80
// Idade entre 18 e 59
// console.log(idade >= 18 && idade <= 59)

let media = 10.0;
let sabeIngles = false;
let aprovado = media >= 7.0;
console.log("Aprovado? " + aprovado);

let contratado = aprovado && sabeIngles;
console.log("Contratado? " + contratado);

let reprovado = !aprovado; // Inverte o valor lógico dentro de aprovado