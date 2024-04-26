// function sumar(n1, n2){
//     return n1 + n2;
// }

// const resultado = sumar(2, 3);

// console.log(resultado);

let total = 0; //creamos la variable total para ir sumando el carrito

function agregarCarrito(precio) { // creamos la función agregarCarrito con precio.
    return total += precio; //para incrementar el valor usamos el += 
}

function calcularImpuesto(total){ //creamos esta otra funcion para que calcule el impuesto y nos devuelva el total correcto
    return 1.15 * total;
}

total = agregarCarrito (200); //agregamos objetos al carrito con un precio
total = agregarCarrito (400);
total = agregarCarrito (600);

console.log(total); // mostramos 

const totalAPagar = calcularImpuesto(total); //creamos esta otra variable para mostrar el total adecuado. 

console.log(`El total a pagar es de: ${totalAPagar}`);