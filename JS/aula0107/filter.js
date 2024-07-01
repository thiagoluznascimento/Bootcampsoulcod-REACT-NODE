// Filter = cria um novo array com todos os elementos 
// que passaram no teste da função
// basicamente me retorna os elementos que eu quero.


const notas = [7.0, 4.0, 5.5, 9.0, 8.4];

const notaAcima7 = notas.filter((nota) => nota > 7);
console.log(notaAcima7);



// Exemplo: Filtro de arquivos
let arquivosPasta = ["codigo.js", "estilos.css", "index.html", "sobre.html"];
let extensao = ".html";

// novo array com os elementos que passaram no teste
// pega cada nomeArquivo e verifica se arquivo.endsWith(extensao) se é o final da extensao
const arquivosHtml = arquivosPasta.filter((arquivo) => arquivo.endsWith(extensao)); 
console.log(arquivosHtml);



// Exemplo: Lista de presença
let turma = ["José Almir", "Gabriel Braga", "Victor Icoma", "Igor Gondim", "Bismark"];
let presenca = ["Gabriel Braga", "Victor Icoma", "Bismark"];

const ausentes = turma.filter((aluno) => !presenca.includes(aluno));
console.log(ausentes);



// Exemplo: Filtrar palavras acima de 5 caracteres
let palavras = ["batata", "pão", "arroz", "carne", "ovo", "alface"];
let palavrasAcima5 = palavras.filter((palavra) => palavra.length > 5);
console.log(palavrasAcima5);

