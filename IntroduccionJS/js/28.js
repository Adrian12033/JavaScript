// CLASES

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de: ${this.precio}€`;
    }

    devolverPrecio() {
        return `El precio del ${this.nombre} es de ${this.precio}`;
    }
}

const producto2 = new Producto("Monitor curvo de 49 pulgadas", 800);
const producto3 = new Producto("Laptop", 300);

console.log(producto2);
console.log(producto3);
console.log(producto2.devolverPrecio());

//HERENCIA

class Libro extends Producto { 

    constructor(nombre, precio, isbn){
        super(nombre, precio); // esto lo que está haciendo es coger de constructor de producto
        this.isbn = isbn; // ya que en el constructor de producto no está isbn lo añadimos en el contructor de Libro 
    }

    formatearLibro(){
        return `El libro ${this.nombre} con un precio de ${this.precio}€ y tiene el siguiente ISBN ${this.isbn}`
    }
}

const libro = new Libro ("La guerra de las galaxias", 12.95, "75483745837654");

console.log(libro.formatearLibro());


