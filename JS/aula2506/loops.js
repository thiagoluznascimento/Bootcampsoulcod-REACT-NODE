// Estruturas de repetição = loops = laços
// Essas estruturas possuem:
    // Condição de parada
    // Valor inicial (variável de controle, contador)
    // Atualização

// while = enquanto

/*
    while (condicao) {
        o código que será repetido
    }
*/
let numero = 0

// condição de parada
while(numero < 100) {
    console.log(numero)
    numero ++ //Atualização
}

let numero2 = 0
while (numero2 <= 50) {
    console.log(numero2);
    numero2 += 5  // ou numero2 = numero2 + 5 
}

let numero3 = 100;
while (numero3 >= 0) {
    console.log(numero3);
    numero3 --;
}
console.log(numero3);

// Soma 1 + 2 + 3 + 4+5+6+7+8+9+10 = 55
let cont = 1;
let soma = 0;
while (cont <= 10) {
    soma = soma + cont;
    cont++;
}

console.log(soma);

