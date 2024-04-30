//PROGRAMACION ORIENTADA A OBJETOS

/*OBJECT LITERAL*/

const producto = {
  nombre: "Monitor",
  precio: 400,
};

//DIFERENCIA ENTRE CLASE Y OBJETO: un objeto tiene diferentes variables en una sola, las clases

//OBJECT CONSTRUCTOR //es mas dinamico

function Cliente(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

Cliente.prototype.formatearCliente = function () {
  return `El cliente ${this.nombre} tiene el apellido: ${this.apellido}`;
};

const cliente = new Cliente("Adrian", "Ordoñez Rossello");


function Producto(nombre, precio) {
  //Producto es una clase
  this.nombre = nombre;
  this.precio = precio;
}

//El prototype solo se podrá usar en un obejto en específico

Producto.prototype.formatearProducto = function () {
  return `El producto ${this.nombre} tiene un precio de: ${this.precio}€`;
};

const producto2 = new Producto("Monitor curvo de 49 pulgadas", 800);
const producto3 = new Producto("Laptop", 300);

function formatearProducto() {
  return `El producto ${producto.nombre} tiene un precio de: ${producto.precio}€`;
}

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(cliente.formatearCliente());
