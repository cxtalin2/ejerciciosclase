// El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

// El BMI se calcula con la siguiente formula:

// peso / altura^2
// Escribe un programa que le pida al usuario su peso y altura. El programa deberá calcular el BMI e imprimir:

// "Bajo de peso" si el BMI < 18.5
// "Normal" si está entre 18.5 y 24.9
// "Sobrepeso" si está entre 25 y 29.9
// "Obeso" si es igual o mayor a 30


var peso = parseFloat(prompt( "Ingresa tu peso:" ));
var altura = parseFloat(prompt( "Ingresa tu altura:" ));


var bmi = peso / altura^2


switch(true) {
    case bmi < 18.5: 
        alert( "Usted está bajo de peso. Su Índice de Masa Corporal es: " + bmi )
        break;
    case bmi >= 18.5 && bmi < 24.9: 
        alert( "Su índice de masa corporal es" + bmi + ". Usted está normal de peso." )
        break;
    case bmi >= 25 && bmi <= 29.9:
        alert( "Su índice de masa corporal es: " + bmi + ". Usted tiene sobrepeso." )
        break;
    case bmi > 30:
        alert( "Su índice de masa corporal es" + bmi + ". Tiene obesidad." )
        break;
    default:
        alert("IMC no válido");
}