// // Calcular precio sin IVA

// Escribe una función que calcule el precio original del producto, sin IVA. Si el precio de un producto es 
// 200,00 y el IVA es del 15%, entonces el precio final del producto (con IVA) es: 200,00 + 15% = 230,00. Por lo tanto,
//  si su función recibe 230,00 como entrada, debería devolver 200,00

// Restricciones:
// El IVA es siempre del 15%.
// Redondea el resultado a 2 decimales.
// Si se proporciona un valor nulo, devuelve -1

function precioSinIva(precio) {
    if (precio < 0) {
        console.log(-1);
    } else {
    porcentaje= precio * 0.15
    resultado= precio - porcentaje
    return resultado.toFixed(2);
    }
}

console.log(precioSinIva(300));
