// descrições
/*
Objetivo:
Reforçar os conceitos básicos do Javascript e lógica de programação abordados na semana 03. 

1 é de boas
2 é de boas
3 palindromo quando é de traz para frente é a msm coisa. Por exemplo, ARARA é um palindromo.
4 é de boas
5 é de boas pq tem uma parecida no exercicio (tipo a do maior)
6 é de boas tbm.. calcular a media
7 exige obj 
8 tem uma parecida "é de boas"
 */

// Exercício 1: Escreva uma função que receba um array de números e retorne um novo array contendo apenas os números pares.

function retornaNumPar(numeros){
    let numPares = [];
    for(numero of numeros){
        if (numero %2 === 0){
            numPares.push(numero);
        }
    }
    return numPares;
}

let listaNum = [1, 2, 3, 5, 8, 6, 4, 8, 2, 12, 11,7];
const numerosPares = retornaNumPar(listaNum);
console.log(`Os numeros pares são ${numerosPares}`);

// Para esse exercicio, criei a função que retorna os numeros pares e passei uma lista de numeros como parametros.
// para cada numero dentro da lista de numeros, se o modulo% de 2 for igual a 0, é porque o numero é par, logo ele adiciona o numero com o push para lista let numPares = [];
// depois disso, ele faz o retorno da funçao com todos os numero pares.



// Exercício 2: Escreva uma função que receba um array de números e retorne a soma de todos os números.

function somaNumeros(numeros){
    let soma = 0;
    for(let i = 0; i < numeros.length; i++){
        soma = soma + numeros[i];
    }
    return soma;
}

let listaNumeros =  [1, 2, 3, 5, 8, 6];
const resultado = somaNumeros(listaNumeros);
console.log(`A soma de todos os numeros é: ${resultado}`);

// Para esse exercicio, criei uma funcao que retorna a soma dos numeros que estão dentro do array que foi passado por parametro.
// Tive que criar uma váriavel soma para guardar cada iteração somando mais o próximo numero da próxima iteração; depois retornei essa soma com o a soma de todos os numeros.


// Exercício 3: Escreva uma função que verifique se uma string é um palíndromo (ou seja, a string é igual quando lida de trás para frente). ARARA -> Palíndromo.


function palidromo(palavra){    
    let strSplitada = palavra.split("");
    let strSpliReverse= palavra.split("").reverse();
    
    if (strSplitada.join("").toLowerCase() === strSpliReverse.join("").toLowerCase()){
        console.log(`A palavra ${palavra} é um Palíndromo!`);
    } else {
        console.log(`A palavra ${palavra}, não é um Palíndromo!`);
    }
}
let string = "Radar";
palidromo(string);

// Para esse exercicio, criei a função que me retorna se a palavra é um Palíndromo ou não. Para isso tive que splitar a string com o metodo split
// para que eu consiguisse utilizar o metodo reverse() e depois comparar se a string splitada seria a mesma que estava invertida.


// Exercício 4: Escreva uma função que conte o número de vogais em uma string.
//  Dica: Você pode usar um array com todas as vogais possíveis e verificar cada letra da string para ir contando.

let frase = "Frase teste para saber o numero de vogais em uma string";
const vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function contaVogais(frase, vogais){
    let fraseSplit = frase.split("");
    // console.log(fraseSplit);
    let contagemVogais = 0;
    for (letra of fraseSplit){
        for (vogal of vogais){
            if (letra === vogal){
                contagemVogais += 1;
            }
        }
    }
    return contagemVogais;
}

let total = contaVogais(frase, vogais)
console.log(`Número total de vogais: ${total}`);

// outra forma, seria.

let frase = "Frase teste para saber o numero de vogais em uma string";
let vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

let fraseSplit = frase.split("");
let contagemVogais = 0;

for (let letra of fraseSplit) {
    if (vogais.includes(letra)) {
        console.log(letra);  
        contagemVogais += 1;
    }
}

console.log(`Número total de vogais: ${contagemVogais}`);


// Para essa questao, fiz das duas formas para fixar o aprendizado!
// A primeira forma, splitei a string para conseguir separar letra por letra, depois comparei com o laço for, para cada letra dentro de fraseSplit, e para cada vogal dentro de vogais,
// verifica se letra de fraseSplit é igual a vogal de vogais, se sim, contagemVogais recebe contagemVogais +1 e depois armazena na variavel let contagemVogais inicializada como = 0;
//  depois de tudo, retorna contagemVogais contendo a soma de todas as vogais da frase.
// a segunda forma que fiz foi com o uso do método includes para saber se letra está dentro de vogais.


// Exercício 5: Escreva uma função que receba um array de números e retorne o menor número do array.

let numeros = [1,2,3,5,3,6,4,7,8,9,10];

function retornaMenorNumero(arrayNum){    
    let menor = arrayNum[0];
    for (let i = 1; i < arrayNum.length; i ++ ){// para cada i(indice) començando 0, enquanto i < temanho de numeros; indice + indice
        if (arrayNum[i] < menor){
            menor = arrayNum[i];
        }
    }
    return menor;
}

let menorNumero = retornaMenorNumero(numeros);
console.log(`O menor número do array é: ${menorNumero}`);

// Para essa questao, eu criei uma função que retorna o menor numero e para isso, criei um laço for para percorrer o array de numeros.
// criei uma variavel chamada let menor para receber o valor de arrayNum[i] de cada posição que for menor do que a menor da utima posição do laço for.
// ou seja, se arrayNum[i] for menor que o ultimo menor valor, ele amarzena na variavel menor e depois retorna com a função.


// Exercício 6: Escreva uma função que calcule a média dos números em um array. [7.0, 8.0, 9.0] -> (7.0 + 8.0 + 9.0) / 3

let numeros = [2,4,6];

function calcularMedia(numeros){
    let soma = 0;
    for (numero of numeros){
        soma += numero;
    }
    let media = soma / numeros.length;
    return media;
}


const valorMedia = calcularMedia(numeros);
console.log(valorMedia);

// Para esse exercicio, criei uma funcao que calcula os numeros de um array passado por parametro.
// Com uma logica parecida com a questao numero 2, para cada numero em numeros, soma recebeu numero mais o valor do proximo numero.
// depois de armazenar os valores na variavel soma, criei uma outra variavel chamada, media, onde dividir o valor de soma pelo tamanho(quantidades) de numeros do array para encontar a média.


// Exercício 7: Escreva uma função que conte a frequência de cada caractere em uma string. Dica: use objetos para guardar as contagens de cada caractere.

function contarCaracteres(palavra, caractere){
    let ocorrencias = 0;
    for (let i = 0; i < palavra.length; i ++){
        if (palavra[i] === caractere){ //se palavra na posicao i,  for igual a caracter, adiciona em ocorrencias;
            ocorrencias ++;
        }
    }
    return ocorrencias;
}

let palavra = "Olá mundoo";
let caractere = "o";
let contagem = contarCaracteres(palavra, caractere);
console.log(`O total de letras ${caractere} é de: ${contagem}`);

// Nessa questao eu nao conseguir usar objetos para guardar as contagens de cada caractere.


// Exercício 8: Escreva uma função que recebe um email, e ofusca parte do seu endereço. Por exemplo: jose.almir@dev.com -> j*********@dev.com.

function ofuscaEmail(email){
    let parte = email.split("@");
    let primeiraParte = parte [0];
    let dominio = parte [1]

    let nomeOfuscado = primeiraParte[0] + "*".repeat(primeiraParte.length);
    return nomeOfuscado + "@" + dominio
}
let exemplo = "thiagoifnmgsi2015@gmail.com"
let emailOfuscado = ofuscaEmail(exemplo);
console.log(emailOfuscado);

// Para essa questao, eu splitei o email passado, em dois pedaços, um antes do "@" e outro depois do "@".
// depois disso criei a variavel nomeOfuscado para armazenar o primeio elemento do indice ( ou seja, [0] = t) e concatenei com "*" com o metodo .repeat para repetir
// a quantidade de elementos que tem na primeiraParte (primeiraParte.length).
// depois só retornei nomeOfuscado concatenado com o dominio. que seria a segunda parte; parte [1].


// resolucao dessa 8 utilizando Arrow function. (aero function)
const ofuscaEmail = (email) => {
    const partes = email.split("@");
    // console.log(partes);
    const usuario = partes[0];
    const dominio = partes[1];

    return usuario[0] + "*****" + "@" + dominio;
}

console.log(ofuscaEmail("thiagoluz@gmail.com"));



const ofuscaEmail = (email) => {
    // desesrtuturacao do array
    // o valor do indice 0 é armazenado na variavel 'usuario'
    // o valor do indice 1 é armazenado na variavel 'dominio'
    const [usuario, dominio] = email.split("@");

    return usuario[0] + "*****" + "@" + dominio;
}
console.log(ofuscaEmail("thiagoluz@gmail.com"));


// outro exemplo de desestruturacao de arrays, bastante usual
const [nome1, nome2] = ["Almir", "Gabriel", "Victor", "Igor"];
console.log(nome1);
console.log(nome2);


// QUESTAO 7
function contarCaracteres(str) {
    const contagem = {};

    for (let caractere of str) {
        if(contagem [caractere]){
            contagem[caractere]++;
        } else {
        contagem[caractere] = 1;
        }
    }
    console.log(contagem);
}
contarCaracteres("batata");



// 4
function contagemVogais(palavra) {
    const vogais = ["a", "e", "i", "o", "u"];
    let contagem = 0;
    const palavralower = palavra.toLowerCase();

    for (let letra of palavralower) {
        if (vogais.includes(letra)){
            contagem ++;
        }
    }
    return contagem;
}
console.log((contagemVogais("Possivel")));

