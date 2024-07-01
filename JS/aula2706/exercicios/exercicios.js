// 1. Crie uma função que recebe um array com os nomes dos alunos de uma turma,
// e outro array que recebe a lista de presença com os nomes. Retorne uma lista com quais alunos faltaram.

function listaPresenca(alunos, lista){
    let faltantes = []; // estou adicionando a lista de alunos que nao estao presentes
    for (aluno of alunos){
        if (!lista.includes(aluno)) {
            faltantes.push(aluno)
        }
    }
    return faltantes;
}

let turma = ["Thiago", "Joao", "Matheus", "Joaquin", "Ana", "Elisa", "Douglas"];
let alunoPresente = ["Thiago", "Ana", "Douglas"];

let presenca = listaPresenca(turma, alunoPresente)
console.log(`Os alunos ${presenca}, não estão presentes.`);







// Testes para resolução
// let alunos = ["Thiago", "Joao", "Matheus", "Joaquin", "Ana", "Elisa", "Douglas"];

// console.log(alunos.length);
// for (let i = 0; i < alunos.length; i++){ Para cada valor de i, começando em 0; enquanto i for menor que o comprimento do array alunos, incremente i em 1 a cada iteração."
    // if (alunoPresente.includes(alunos[i])) {

    // }
//    
// }


// 2. Crie uma função que recebe um array de números e retorna um array com todos os valores elevados ao quadrado.

// let numeros = [1, 2, 3, 4, 8, 9, 3, 5];

// for (let i = 0; i < numeros.length; i ++){
//     let numElevado = (numeros[i]) **2;
//     console.log(numElevado);
// }

let numeros = [1, 2, 3, 4, 8, 9, 3, 5];

function aoquadrado(numeros){
    let numElevado = [];
    for (numero of numeros) {
        let elevado = numero **2;
        numElevado.push(elevado);
        console.log(`O quadrado de ${numero} é: ${elevado}`);
    }
    return numElevado;
}

let numeroAoQuadrado = aoquadrado(numeros);

// 3. Crie uma função que recebe um array de nomes de arquivos, e recebe também uma extensão,
// a função deve retornar apenas os nomes de arquivo que forem dessa extensão.

let arquivos = ["musicas.mp3", "videos.mp4", "arquivo.pdf", "arquivo.cdr", "text.txt", "arquivo.bat"];
let extensao = ".bat";

function organizaArquivos(arquivos, extensao){
    let arqExtencao = [];
    for (let arquivo of arquivos){
        if (arquivo.endsWith(`${extensao}`)){
            arqExtencao.push(arquivo);
        }
    }
    return arqExtencao;
}

let arquivo = organizaArquivos(arquivos, extensao);
console.log(arquivo);

// Eu mesmo fazendo alguns testes...
let arquivos = ["musicas.mp3", "videos.mp4", "arquivo.pdf", "arquivo.cdr", "text.txt", "arquivo.bat"];
let extensao = ["arquivo.bat"];

function organizaArquivos(arquivos, extensao){
    let arqExtencao = [];
    for (let i = 0; i < arquivos.length; i++ ){  //Para cada valor de i, começando em 0; enquanto i for menor que o comprimento do array arquivos, incremente i em 1 a cada iteração."
        if(extensao.includes(arquivos[i])){
            arqExtencao.push(arquivos[i])
        }
    }
    return arqExtencao;
}
let arquivo = organizaArquivos(arquivos, extensao);
console.log(arquivo);


// 4. Crie um array contendo os números de 1 a 10 e exiba-os no console com for-of e for comum.
const numeros = [1,2,3,4,5,6,7,8,9,10]

for (numero of numeros){
    console.log(numero);
}

for  (let i = 0; i < numeros.length; i++ ) { //Para cada valor de i, começando em 0; enquanto i for menor que o comprimento do array numeros, incremente i em 1 a cada iteração."
    console.log(numeros[i])
}


// 5. Crie uma função que recebe um array de strings como parâmetro e retorne um novo array apenas com as strings acima de 5 caracteres.

let strs = ["olá mundo", "teste", "abc", "olá", "1234"];

function palavrasMaiores(arr){
    let stringsFiltradas = [];
    for (str of arr){
        if(str.length > 5) {
            stringsFiltradas.push(str);
        }
    }
    return stringsFiltradas
}

let palavras = ["batata", "pão", "arroz", "carne", "ovo", "carne"];
console.log(palavrasMaiores(palavras));



// 6. Crie um array com 7 números. Percorra e indique qual o maior número deles.


function exercicio6(){
    let numeros = [1,2,3,6,8,7,4,-100,69];
    let maior = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }

    console.log(maior);
}
exercicio6()




// 7. Crie uma função que extrai os dígitos verificadores de um cpf. Ex: "056.985.990-23" -> "23".
// Retorne apenas os dois últimos dígitos.

function extrairDigitosVerificadores(cpf){
    const partesCpf = cpf.split("-");
    console.log(partesCpf);
    return partesCpf[1];
}
console.log(extrairDigitosVerificadores("056.985.990-23"));


// 8. Crie uma função que inverte uma string. Retorna ela invertida.

function inverterPalavra(palavra){
    return palavra.split("").reverse().join("");
}

console.log(inverterPalavra("Batata"));



// 9. Escreva uma função que receba uma palavra e um número.
//  Retorne a palavra repetida a quantidade de vezes indicada pelo segundo parâmetro.
//  Exemplo: repetir("batata", 3) -> "batatabatatabatata". OBS: Utilize um loop para resolver.
function repetirPalavra(palavra, qt) {
    // return palavra.repeat(qt);
    let resultado = "";
    
    for(let i = 0; i < qt; i++){
        resultado += palavra;
    }
    return resultado;
}

console.log(repetirPalavra("Batata 9", 3));


// 10. Escreva uma função que receba duas strings e retorne true se elas forem iguais ou false caso contrário.

function compararString(str1, str2) {
    return str1 === str2;
}

console.log(compararString("batata", "batta"));


// 11. Crie uma função que recebe um dia, mês e ano dentro de um array.
//  Retorna a data utilizando o separador que também será definido via parâmetros da função (-, / ou .).
//  Ex: formatarData(array, '.') -> '20.06.2000'

let dataArray = ["20", "06", "2024"];

function formatarData(arr, sep) {
    return arr.join(sep);
}

console.log(formatarData(dataArray, '-'));



// 12. Crie uma função que recebe um array, um valor de busca e um valor padrão.
//  Caso o elemento exista no array retorne o elemento, caso contrário retorne o valor padrão definido via parâmetro.
//  Ex: busca(array, 'batata', 'não tem batata') -> 'não tem batata'
function busca(array, elemento, valorPadrao){
    if(array.includes(elemento)){
        return elemento;
    }else{
        return valorPadrao;
    }
}

let array = ["alface", "pimenta", "maionese", "c"];
console.log(busca(array, "batata", "nao tem batata"));