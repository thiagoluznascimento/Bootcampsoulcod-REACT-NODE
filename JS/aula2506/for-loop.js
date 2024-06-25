/*
    for (inicializacao; condicao; atualizacao) {
        // código que será repetido
    }
*/

for(let cont = 1; cont <= 10; cont ++) {
    console.log(cont);
} // após executar o bloco, ele faz a atualização cont ++;

// For = sequẽncias
// While = repetição indefinida
// 0 até 100, pulando de 5 em 5
for(let cont = 0; cont <= 100; cont += 5) {
    console.log(cont);
} 
// 100 até 0

for(let cont = 100; cont >= 0; cont --) {
    console.log(cont);
}

// Adaptar os exercicios
// 1. Use um laço while para imprimir na tela todos os números pares de 2 a 10.
for(let c = 2; c <= 10; c += 2) {
    console.log(c);
}

//2. Taboada do 7
let n = 7;
for(let c = 1; c <= 10; c++) {
    console.log(`${n} x ${c} = ${n*c}`);
}


// 3. Use um laço for para somar de 1 até 999, apenas somando os números ímpares.
//Utilize um if para verificar se o número é ímpar.
let soma = 0;
for(let c = 1; c <= 999; c++) {
    if(c % 2 !==0) { //para saber se o numero é impar
        soma = soma + c;
    }
}
// Interpolação / Template string
console.log(`Soma dos números: ${soma}`);

// 4. Crie um programa que conta quantos números entre 1 e 1000 são divisíveis por 9, 
// mostre o número e ao final exiba o total de números divisíveis por 9.
let qt = 0;
for (let c = 1; c <= 1000; c++) {
    if(c % 9 === 0) {
        console.log(`${c} é divisível por 9.`);
        qt++;
    }
}
console.log(`Total:  ${qt}`);
