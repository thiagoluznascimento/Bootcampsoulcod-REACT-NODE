// Strings = cadeias de caracteres

const nome = "Thiago Luz";
const sobrenome = 'Nascimento';

// Interpolação de string
const nomeCompleto = `${nome} ${sobrenome}`

console.log(nomeCompleto);





let comida = "Batata Assada";
console.log(comida[0]);
console.log(comida[2]);
console.log(comida[5]);
console.log(comida[6]);
console.log(comida[8]);
console.log(comida[500]); //undefine = não existe essa posição na string

console.log(comida.length);
console.log(comida[comida.length-1]);

let comida = "Batata Assada"; //repetindo a msm lá de cima só para rodar esse for
for (let i = 0; i < comida.length; i++) { // para cada i(indice) començando 0, enquanto i < comida; indice + indice
    console.log(comida[i]);
}

// Funções de String
let palavra = 'Java Scrip';
console.log(palavra.toLocaleLowerCase()); //Minuscula
let palavraMin = (palavra.toLocaleLowerCase()); //Minuscula

console.log(palavra.toUpperCase()); //Maiuscula

console.log(palavra.charAt(0)); // Palavra[0]

console.log(palavra.replace("Java", "Type"));
console.log(palavra.replace("J", "R"));
console.log(palavra.replace("a", "x"));

let frase = "Eu comi arroz, feijão, batata e carnee."
console.log(frase.includes("carne"));

if(frase.includes("alfce")) {
    console.log("Muito bem!");
} else {
    console.log("Coma algo saudável!");
}

let arquivo = "musica .mp3"
console.log(arquivo.endsWith('mp3')); // verifica se termina com 'mp3'
console.log(arquivo.endsWith('mp4')); // verifica se termina com 'mp4'
console.log(arquivo.split(' ')); // verifica se termina com 'mp4'

// Slice
let arquivo = "musica .mp3"
console.log(arquivo.slice(0, 3)); // recorta a string do indice ) até 3
console.log(arquivo.slice(0, 4));
console.log(arquivo.slice(4, 6));




function contarCaractere(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

// Exemplo de uso:
let string = "Hello, world!";
let caractere = 'o';
let ocorrencias = contarCaractere(string, caractere);
console.log(`O caractere '${caractere}' ocorre ${ocorrencias} vezes na string.`);
