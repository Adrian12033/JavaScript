const producto = {
    nombreProducto: "Monitor",
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: "1Kg",
    medida: "1m"
}

const nuevoProducto = { ... producto, ...medidas }

console.log(producto);
console.log(nuevoProducto);

