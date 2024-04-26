
const carrito = [
    { nombre: "Monitor 20 pulgadas", precio: 500 },
    { nombre: "Tele", precio: 300 },
    { nombre: "Ipad", precio: 200 },
    { nombre: "Movil", precio: 700 },
    { nombre: "Teclado", precio: 300 },
    { nombre: "PC", precio: 1500 },
  ];

//FOR EACH //PUEDE SER USADOS UNICAMENTE EN ARREGLOS, SE EJECUTARA LAS VECES QUE ELEMENTOS HAYA EN EL CARRITO HAY 6 ELEMENTOS ENTONCES SE EJECUTARÁ 6 VECES

const arreglo1 = carrito.forEach(producto => producto.precio);


//MAP //PUEDE SER USADOS UNICAMENTE EN ARREGLOS, 

const arreglo2 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);

// diferencias entre el for each y el map ya que hacen lo mismo, la diferencia es que for each si que imprime en la consola y el map te crea un nuevo array que es útil cuando quiieres filtrar por ejemplo en este caso podriamos filtrar el porecio de cada elemento.

console.log(arreglo1); //imprime
console.log(arreglo2); //nuevo array