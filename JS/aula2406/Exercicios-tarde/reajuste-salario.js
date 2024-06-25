// 4. Crie duas variáveis: salário e quantidadeDependentes.
// Siga a seguinte regra para aplicar ajustes salariais: Caso não possua dependentes não realizar ajustes no salário,
//  se houver entre 1 e 5 aumentar em 30% o salário. Caso seja acima de 5 aumentar em 40% o salário.

let salario = 50.00;
let quantidadeDependentes = 6;

if (quantidadeDependentes > 1 && quantidadeDependentes < 5) {
    calculoReajuste = (30 / 100) * salario
    reajusteSalario = calculoReajuste + salario
    console.log("Seu salário foi reajustado para: R$ " + reajusteSalario.toFixed())
} else if (quantidadeDependentes > 5 ) {
    calculoReajuste = (40 / 100) * salario
    reajusteSalario = calculoReajuste + salario
    console.log("Seu salário foi reajustado para: R$ " + reajusteSalario.toFixed(2))
}




