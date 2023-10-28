/** Amplia la funcionalidad de la función suma()

La siguiente función es capaz de sumar dos números. ¿qué cambios deben hacerse a la misma para que sea capaz de sumar 2 o más números?

function suma( numero1, numero2 ) {
    return numero1 + numero2;
}

suma( 3, 6 );   // 9 */


function suma(...numeros) {
    if (numeros.length < 2) {
      return "Debes poner al menos dos números para sumar.";
    }
    return numeros.reduce((total, numero) => total + numero, 0);
  }
  
  const resultado = suma(3, 4, 2, 8, 32, 1);
  console.log(resultado);
  

/**¿Va a sobrevivir?

Un héroe se dirige al castillo para completar su misión. Sin embargo, le han dicho que el castillo está rodeado por un par de poderosos dragones. cada dragón necesita 2 balas para ser derrotado, nuestro héroe no tiene idea de cuántas balas debe cargar.

Responda a la pregunta y devuelva true si es así, de lo contrario false */

function sobrevivira( balas, dragones ) {
    return balas >= (dragones * 2);
}
const balasDisponibles = 8; 
const dragones = 4; 

const sobrevive = sobrevivira(balasDisponibles, dragones);
console.log(sobrevive); 