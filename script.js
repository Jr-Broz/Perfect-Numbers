// Perfect: aliquot sum = number
// 6 is a perfect number because (1 + 2 + 3) = 6
// 28 is a perfect number because (1 + 2 + 4 + 7 + 14) = 28
// Abundant: aliquot sum > number
// 12 is an abundant number because (1 + 2 + 3 + 4 + 6) = 16
// 24 is an abundant number because (1 + 2 + 3 + 4 + 6 + 8 + 12) = 36
// Deficient: aliquot sum < number
// 8 is a deficient number because (1 + 2 + 4) = 7
// Prime numbers are deficient

//The aliquot sum is defined as the sum of the factors of a number not including the number itself. For example, the aliquot sum of 15 is (1 + 3 + 5) = 9

let fatoriais = Number("");
let outroNumero = prompt("escreva um número para ver se ele é perfeito, deficiente, ou abundante,");

  for(i=1;i < outroNumero;i++){

      if(outroNumero % i == 0 ){
    

        console.log('os fatoriais sao esses', i);
        fatoriais += i
     }

  }
     if(fatoriais == outroNumero){
        console.log('isso e um numero perfeito, a soma dos fatoriais é igual ao numero colocado')
      }

    if(fatoriais > outroNumero){

      console.log(`o número que você colocou é um numero abundante, pois a soma aliquot é maior que o número colocado`);
    }

    if(fatoriais < outroNumero){

      console.log(`o número que você colocou é um numero deficiente, pois o numero é maior que a soma aliquot`);
    }


    