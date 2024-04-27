//PROGRAMACION ORIENTADA A OBJETOS

/*OBJECT LITERAL*/

const producto = {
  nombre: "Monitor",
  precio: 400,
};

//DIFERENCIA ENTRE CLASE Y OBJETO: un objeto tiene diferentes variables en una sola, las clases

//OBJECT CONSTRUCTOR //es mas dinamico

function Producto(nombre, precio) {   //Producto es una clase
  this.nombre = nombre;
  this.precio=precio;
}

const producto2 = new Producto("Monitor curvo de 49 pulgadas", 800);
const producto3 = new Producto("Laptop", 300);

console.log(producto2);
