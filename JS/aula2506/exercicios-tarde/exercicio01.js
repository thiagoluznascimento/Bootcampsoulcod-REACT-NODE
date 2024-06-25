// 1. Faça a tabuada completa utilizando o loop for.

const numeros = [1,2,3,4,5,6,7,8,9,10]
let num = 0

while(num <= 10){
    for(numero in numeros){
        result = numero * num
        console.log(`${num} X ${numero} = ${result}`);
    }
    num++;
}

// outra forma

for (let i = 1; i <= 10; i++) {
    console.log('===============')
    console.log(`Tabuada do ${i}`)
    console.log('===============')
  
    for (let contador = 1; contador <= 10; contador++) {
      const resultado = i * contador
      console.log(`${i} x ${contador} = ${resultado}`)
    }
  }



//   outra forma

  let multiplicador = 1;
let contador = 0;

for (multiplicador = 1; multiplicador <= 10; multiplicador++) {
  for (contador = 0; contador <= 10; contador++) {
    console.log(`${multiplicador} x ${contador} = ${multiplicador * contador}`);
  }
  console.log("===========");
}