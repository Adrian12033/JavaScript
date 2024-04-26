//OBJETOS

const producto = {
    nombreProducto: "Monitor",
    precio: 300,
    disponible: true,
}

//FORMA ANTERIROR
//esto de aqui es para sacar un valor de un objeto y convertirlo en una variable

// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;
// const disponibleProducto = producto.disponible;

// console.log(precioProducto);
// console.log(nombreProducto);
// console.log(disponibleProducto);

//DESTRUCTURING 

const {precio, nombreProducto} = producto; //creamos variable y sacamos el valor en una sola linea

console.log(precio);
console.log(nombreProducto);