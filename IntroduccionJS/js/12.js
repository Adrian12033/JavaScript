// "use strict"; //para que sea estricto a la hora de detectar errores
//OBJETOS
const producto = {
    nombreProducto: "Monitor",
    precio: 300,
    disponible: true,
}

Object.freeze(producto); //no puedes ni modificar ni eliminar ni agregar nuevas propiedades pero con .seal si que puedes modificar

// producto.imagen = "imagen";

console.log(producto);