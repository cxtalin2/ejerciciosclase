let products = [
    { nombre: "Pan", precio: 3, cantidad: 20 },
    { nombre: "Tomate", precio: 8, cantidad: 7 },
    { nombre: "Leche", precio: 0, cantidad: 4 },
    { nombre: "Huevos", precio: 9, cantidad: 0 },
    { nombre: "Arroz", precio: 5, cantidad: 5 },
    { nombre: "Cebolla", precio: 0, cantidad: 10 },
    { nombre: "Naranjas", precio: 12, cantidad: 10 },
];

/*Obtener una lista con los nombres de los productos mas baratos, en el entendido que se considera barato un producto que no supera los 5 dólares.
Calcular el costo promedio de todos productos de la lista cuyo precio y cantidad disponible es mayor a cero
Calcular el costo total del inventario.*/

let productosBaratos = [];

for (let i = 0; i < products.length; i++) {
    if (products[i].precio <= 5) {
        productosBaratos.push(products[i])
    }
}
console.log(productosBaratos);


//-------------------- PROMEDIO ----------------------//

let costoTotal = 0;
let cantidadTotal = 0;

for (let i = 0; i < products.length; i++) {
    if (products[i].precio > 0 && products[i].cantidad > 0) {
        costoTotal += products[i].precio * products[i].cantidad;
        cantidadTotal += products[i].cantidad;
    }
}

if (cantidadTotal > 0) {
    let costoPromedio = costoTotal / cantidadTotal;
    console.log(`El costo promedio de los productos con precio y cantidad mayores a cero es: $${costoPromedio}`);
} else {
    console.log("No hay productos con precio y cantidad mayores a cero.");
}

//--------------- COSTO TOTAL -----------------//

let costoTotalInventario = 0;

for (let i = 0; i < products.length; i++) {
    costoTotalInventario += products[i].precio * products[i].cantidad;
}

console.log(costoTotalInventario);