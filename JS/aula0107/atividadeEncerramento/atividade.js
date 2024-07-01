// 1. Crie uma função arrow que recebe dois números e retorna o maior deles.

const maoir = (a, b) => {
    if (a > b){
        return a;
    }else {
        return b;
    }
};
let resultado = maoir(1,3);
console.log(`O numero maior é ${resultado}`);


// 2. Dado um array de palavras, use forEach para imprimir cada palavra com a primeira letra em maiúscula.
const palavras = ["teste", "palavra2", "outra palavra", "lorem"];


const primeiraMaiuscula = (palavras) => {
    palavras.forEach((palavra) => {
        let primeiraLetraMaiucula = palavra[0].toUpperCase() + palavra.slice(1,);
        console.log(`${primeiraLetraMaiucula}`);
    });
}
primeiraMaiuscula(palavras);

// 3. Use map para transformar um array de números, multiplicando cada número por 5.
const valores = [2,5,3,6,8,7];

const novosValores = valores.map((valor) =>  valor * 5);
    
console.log(novosValores);


// 4. Dado um array de idades, use filter para retornar apenas as idades maiores ou iguais a 18.
const idades = [15, 20, 14, 18, 19, 12, 17];

const maiorIdade = idades.filter((idade) => idade >= 18);
console.log(maiorIdade);


// 5. Dado um objeto representando um livro, que contém título, autor, e um objeto aninhado com informações de publicação (editora, ano), acesse o nome da editora.
const livro = {
    titulo: "Atitute Mental Positiva",
    autor: "Napoleão Hill",
    coautor: "W. Clemente Stone",
    publicacao:{
        editora: "citadel",
        ano: "2015",
    }
}

console.log(livro.publicacao.editora);

// 6. Crie um array de frutas e use a desestruturação para extrair a primeira e a segunda fruta em variáveis separadas.
const [fruta1,fruta2] = ["banana", "maçã", "goiaba", "pera"];
console.log(fruta1);
console.log(fruta2);

// 7. Tente adaptar os exercícios da atividade da semana 03 para utilizar arrow function, forEach, map e filter.

