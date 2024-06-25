/* 1. Defina 3 variáveis com notas de 0 a 10. Calcule a média das três notas. Em seguida mostre no console o status do aluno:
Maior ou igual 7 = Aprovado
Entre 5 e 7 = Reforço
Menor que 5 = Reprovação */

let nota1 = 3;
let nota2 = 8;
let nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;
// console.log(media)
if (media >= 7) {
    console.log("Parabéns! Sua nota está na média! Sua média foi de: " + media + " Você foi Aprovado!")
} else if (media >= 5 && media <= 7) {
    console.log("Sua nota média está entre 5 e 7, você está precisando de reforço! Sua média foi de: " + media)
} else if (media < 5) {
    console.log("Você foi reprovado! Sua média está muito baixa! Sua média foi de: " + media)
}