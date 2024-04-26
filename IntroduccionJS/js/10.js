//OBJETOS 

const producto = {
    nombreProducto: "Monitor",
    precio: 300,
    disponible: true,
}

console.log(producto);

// console.log(producto.precio);

//Agregar nuevas propiedades

producto.imagen = "imagen.jpg";

console.log(producto);

//Eliminar propiedades

delete producto.disponible;
console.log(producto)




