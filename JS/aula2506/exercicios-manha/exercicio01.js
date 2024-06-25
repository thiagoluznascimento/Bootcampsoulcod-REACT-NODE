// 1. Use um laço while para imprimir na tela todos os números pares de 2 a 10.
let num1 = 2;
while (num1 <= 10){
    console.log(num1);
    num1 += 2; //incrementa mais 2
}

// 2. Use um laço while para imprimir na tela a tabuada do 7 (multiplicando de 1 a 10).
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// ...
// 7 x 10 = 70

let num2 = 1;
let mult = 7;
while (num2 <= 10) {
    console.log(mult + " X " + num2 + " = " + num2 * mult);
    num2 ++
}
// console.log(num2);

// 3. Use um laço while para somar de 1 até 999, apenas somando os números ímpares.
//Utilize um if para verificar se o número é ímpar.
let cont = 1;
let soma = 0;

while (cont <= 999) {
    if (cont % 2 !== 0) {
        soma = soma + cont;
        console.log(soma);
    }
    cont ++;
}

console.log("Soma dos ímpares: " + soma);


// 4. Crie um programa que conta quantos números entre 1 e 1000 são divisíveis por 9, 
// mostre o número e ao final exiba o total de números divisíveis por 9.

let cont2 = 1;
let qt = 0;

while (cont2 <= 1000) {
    if(cont2 % 9 === 0){
        console.log(cont2 + "é divisível por 9.");
        qt ++;
    }
    cont2 ++;
}
console.log("Total de quantidade: " + qt)
