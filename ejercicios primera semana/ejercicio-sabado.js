/** De un listado de frutas determinar cuales son los productos que estan entre 10 y 20 dolares */

const frutas = [
    { nombre: 'Mangostino', precio: 34 },       
    { nombre: 'Mora', precio: 17 },      
    { nombre: 'Banano', precio: 11 },        
    { nombre: 'Papaya', precio: 13 },      
    { nombre: 'Lulo', precio: 8 }      
] 

const frutasEntre10Y20 = frutas.filter(fruta => fruta.precio >= 10 && fruta.precio <= 20);
console.log(frutasEntre10Y20);


const rangoDeFrutas = []

for (let i = 0; i < frutas.length; i++) {
   if (frutas[i].precio >= 10 && frutas[i].precio <= 20) {
    rangoDeFrutas.push(frutas[i]);
   }
}

console.log(rangoDeFrutas);