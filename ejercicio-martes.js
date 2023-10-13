const values = [
    { name: 'Juan', age: 45, gender: 'male' },
    { name: 'Sofia', age: 13, gender: 'female' },
    { name: 'Sofia', age: 67, gender: 'female' },
    { name: 'Carlos', age: 32, gender: 'female'},
    { name: 'Ana Maria', age: 27, gender: 'female' },
    { name: 'Luisa', age: 5, gender: 'female' },
    { name: 'Elisa', age: 17, gender: 'female' }
];

let cantidadMujeres = [];

for (let i = 0; i < values.length; i++) {
    if (values[i].gender == 'female') {
        cantidadMujeres.push(values[i])
    }
} 


let cantidadHombres = [];

for (let i = 0; i < values.length; i++) {
    if (values[i].gender == 'male') {
        cantidadHombres.push(values[i]);
    }
}

//-------- PROMEDIO --------//

let sumaEdadesMujeres= 0;
for (let i = 0; i < cantidadMujeres.length; i++) {
    sumaEdadesMujeres= cantidadMujeres[i].age+sumaEdadesMujeres;    
}
let promedioM = sumaEdadesMujeres/cantidadMujeres.length;
console.log(promedioM.toFixed(1));


let sumaEdadesHombres = 0;
for (let i = 0; i < cantidadHombres.length; i++) {
    sumaEdadesHombres = cantidadHombres[i].age + sumaEdadesHombres;
}
let promedioH = sumaEdadesHombres / cantidadHombres.length;
console.log(promedioH.toFixed(1));

//--------- Nombres Iguales --------//

let nombresDuplicados = [];

for (let i = 0; i < values.length; i++) {
    if (values[i] + 1 === values[i]) {
        duplicados.push(values[i]);
}};

console.log(nombresDuplicados);