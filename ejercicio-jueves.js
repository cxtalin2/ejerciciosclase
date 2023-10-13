/*Calcular Entero a partir de un Binario de 4 dígitos.

Dada una matriz de unos y ceros, convierta el valor binario equivalente a un número entero.

Ejemplos:

Entrada: [0, 0, 0, 1]
Salida :  1

Entrada: [0, 0, 1, 0]
Salida :  2

Entrada: [0, 1, 0, 1]
Salida :  5

Entrada: [1, 0, 0, 1]
Salida :  9

Entrada: [0, 0, 1, 0]
Salida :  2

Entrada: [0, 1, 1, 0]
Salida :  6

Entrada: [1, 1, 1, 1]
Salida :  15

Entrada: [1, 0, 1, 1]
Salida :  11.*/

function binarioAEntero(binario) {
    if (binario.length !== 4) {
      return "El número binario debe tener 4 dígitos.";
    }
  
    let entero = 0;
  
    for (let i = 0; i < binario.length; i++) {
      entero += binario[i] * Math.pow(2, 3 - i);
    }
  
    return entero;
  }
  
  console.log(binarioAEntero([0, 0, 0, 1])); 
  console.log(binarioAEntero([0, 0, 1, 0])); 
  console.log(binarioAEntero([0, 1, 0, 1])); 
  console.log(binarioAEntero([1, 0, 0, 1])); 
  console.log(binarioAEntero([0, 1, 1, 0])); 
  console.log(binarioAEntero([1, 1, 1, 1])); 
  console.log(binarioAEntero([1, 0, 1, 1]));
  