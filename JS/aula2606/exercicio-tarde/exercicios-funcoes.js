// 1. Crie uma função para calcular e retorna o IMC, e outra função que recebe o valor de IMC e indica o status no terminal.

function calcularImc(peso, altura) {
    let resultado = peso / (altura*altura)
    return resultado.toFixed(2);
}

function resultadoImc(imc){
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
}

let imcCalculado = calcularImc(69, 1.75)
console.log(`O IMC calculado é ${imcCalculado}`);
resultadoImc(imcCalculado);



// 2. Crie uma função que recebe um número (PARÂMETRO) de 0 a 1. E RETORNA em porcentagem: percentual(0.456) -> 45.6%

let num1 = porcentagemAtual(0.8);

function porcentagemAtual(porcento) {
    return porcento * 100;
}
console.log(`A porcentagem atual é de: ${num1}%`);



// 3. Crie uma função que recebe um número (PARÂMETRO). E RETORNA se ele é negativo (true ou false). Ex: ehNegativo(-2) ===> true

numNegativo(3)
function numNegativo(numero) {
    if (numero < 0) {
        console.log(`${numero} ehNegativo ===> true`);
    }else {
        console.log(`${numero} Ñ é negativo ===> false`);
    }
}



// 4. Crie uma função que conte até um número passado por parâmetro. Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000. OBS: Não possui retorno.

contar(10)
function contar(soma){
    for (let i = 1; i <= soma; i++){
        console.log(i);
    }
}



// 5. Crie uma função que recebe um nome e sobrenome. RETORNA o nome completo como resultado.


function nomeCompleto(nome, sobreNome){
    const NomeSobreNome = `${nome} ${sobreNome}`
    return NomeSobreNome;
}
let nome1 = nomeCompleto("Thiago", "Luz")
console.log(nome1);



// 6. Crie uma função para calcular a área de um circulo = PI * R * R. Considere PI = 3.14.

function calcularPi(raio){
    let area = 3.14 * raio **2;
    return area
}
let pi = calcularPi(2)
console.log(`A area é aproximadamente: ${pi}`);

// 7. Crie uma função que recebe a área de um circulo e mostra o nível:
    // Entre 1 e 20 => Nível I
    // Entre 21 e 40 => Nível II
    // Qualquer outro diâmetro => Nível inválido

function calculaNivel(pi) {
    if (pi >= 1 && pi <=20) {
        console.log("Nível I");
    } else if (pi >= 21 && pi <=40){
        console.log("Nível II");
    }else {
        console.log("Nível inválido.");
    }
}

calculaNivel(pi)


// 8. Escreva uma função que receba uma string e retorne a mesma string em letras minúsculas.

function letraMinuscula(palavra){
    console.log(palavra.toLocaleLowerCase()); //Minuscula
}

letraMinuscula('Java Scrip');



// 9. Escreva uma função que receba uma string e um caractere e retorne o número de ocorrências desse caractere na string.
function contarCaracteres(palavra, caractere) {
    let ocorrencias = 0;
    
    for(let i = 0; i < palavra.length; i++) {
        if(palavra[i] === caractere) {
            ocorrencias++;
        }
    }

    return ocorrencias;
}

console.log(contarCaracteres("BATATA", "A"));
console.log(contarCaracteres("Soulcode", "o"));

