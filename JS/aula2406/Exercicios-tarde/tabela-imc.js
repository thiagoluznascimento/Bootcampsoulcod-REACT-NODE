/*
2. Simule a tabela do IMC com base no valor calculado pela formula: IMC = PESO / (ALTURA x ALTURA).
Indique o status com base no valor do IMC.
*/

let peso = 200;
let altura = (1.75) ** 2;
let imc = (peso / altura)
// console.log(imc)

// Classificação do IMC
// De acordo com a Organização Mundial da Saúde (OMS)

if (imc < 18.5) {
    console.log("Você está abaixo do peso! seu IMC está em: " + imc)
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Seu peso está normal! seu IMC está em: " + imc)
} else if (imc >= 25 && imc <= 29.9) {
    console.log("Você está com sobrepeso! seu IMC está em: " + imc)
} else if (imc >= 30 && imc <= 34.9) {
    console.log("Você está com obsidade de grau I ! seu IMC está em: " + imc)
} else if (imc >= 35 && imc <= 39.9) {
    console.log("Você está com obsidade de grau II! seu IMC está em: " + imc)
} else {
    console.log("Você precisa de cuidados urgente! seu IMC está em: " + imc + " obsidade de grau III !")
}

