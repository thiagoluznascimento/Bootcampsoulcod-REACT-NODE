/* Estruturas condicionais (If-Else)

    if (condição) {
        // instruções caso verdadeiro
    } else {
        //instruções caso falso
    }
*/
let idade = 25

if (idade >= 18) {
    console.log("Entrada liberada.")
} else {
    console.log("Entrada não permitida")
}

let media = 10.0;
let sabeIngles = false;
let aprovado = media >= 7.0;

if(aprovado) {
    console.log("Parabéns! Você foi aprovado!")
} else {
    console.log("Que pena! Continue tentando!")
}

if (aprovado && sabeIngles) {
    console.log("Você foi contratado!")
} else {
    console.log("Voce não foi contratado")
}

// Quero saber se o numero é Positivo, negativo ou Zero
let numero = 0

if (numero > 0) {
    console.log("O número " + numero + " é positivo!")
} else if (numero < 0) {
    console.log("O número " + numero + " é negativo")
} else {
    console.log("O número é zero!")
}

// É pas (divisível por 2) ou ímpar (não for divisível por 2)
let n = 7

if (n % 2 === 0) {
    console.log("O número é par!")
} else {
    console.log("O número é impar")
}

// 1 - Domingo, 2 - Segunda, 3 - terça, ...., Sábado -7
let dia = 7

if (dia === 1) {
    console.log("Hoje é Domingo!")
} else if (dia === 2) {
    console.log("Hoje é Segunda!")
} else if (dia === 3) {
    console.log("Hoje é terça!")
} else if (dia === 4) {
    console.log("Hoje é quarta!")
} else if (dia === 6) {
    console.log("Hoje é sexta!")
} else if (dia === 7) {
    console.log("Hoje é sabado!")
} else {
    console.log("Não existe este dia da semana!")
}