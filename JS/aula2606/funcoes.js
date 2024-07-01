/*
    Funções
    
    function nome_da_funcao(parametros) {
        // bloco de código da função
    }
 */

// Declarando uma função 'boasVindas'
function boasVindas() {
    console.log("Seja bem-vindos");
    console.log("!!!!!");
}

//Chamada da função
boasVindas();

function exemplo2() {
    let a = 5;
    let b = 10;

    console.log(`A soma é ${a + b}`);
}

exemplo2()


// Parâmetros = entrada = o que é necessário para executar
function soma(a, b) {
    console.log(`A soma de ${a} e ${b} é ${a + b}`);
}
soma(15, 10);
soma(17, 18);

// calcula media
function calcularMedia(n1, n2, n3) {
    let resultado = (n1, n2, n3) / 3;
    console.log(`A média é ${resultado}`)
}

let mediaAluno1 = calcularMedia(7, 2, 5);
let mediaAluno2 = calcularMedia(8, 3, 2);
let mediaAluno3 = calcularMedia(7, 4, 8);

function imc(){
    // let peso = 75;
    // let altura = 1.80;
    console.log(calcularImc());
}

// calcula IMC
function calcularImc(peso, altura){
    let calculo = peso / (altura * altura);
    return calculo.toFixed(2);
}

let imc1 = calcularImc( 75, 1.78)
console.log(imc1);

// exercicio 2 é só mutiplicar por 100
// 6 completa a 7