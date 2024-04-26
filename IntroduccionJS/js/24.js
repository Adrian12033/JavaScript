//Los iteradores en programación son herramientas que permiten recorrer elementos de una colección uno por uno de manera ordenada y eficiente.

//FOOR LOOP //va ejecutando un código mientras una condicion sea verdader y cuando sea falsa deja de ejecutar ese código

// for ( let i = 0; i < 10; i++) {
//     console.log(i);
// }

// for ( let i = 1; i < 10; i++) {
//     if (i % 2 === 0) {
//         console.log(`El numero ${i} es PAR`);
//     }else {
//         console.log(`El numero ${i} es IMPAR`);
//     }
// }

const carrito = [
  { nombre: "Monitor 20 pulgadas", precio: 500 },
  { nombre: "Tele", precio: 300 },
  { nombre: "Ipad", precio: 200 },
  { nombre: "Movil", precio: 700 },
  { nombre: "Teclado", precio: 300 },
  { nombre: "PC", precio: 1500 },
];

// for (i = 0; i< carrito.length; i++) { // el .length es para que recorra todo lo que hay dentro del carrito
//     console.log(carrito[i].nombre);
// }


//WHILE LOOP //se ejecuta mientras una condicion sea verdadera

// let i = 20; //indice

// while (i < 10) { // condicion
    
//     console.log('No aparece nada') //no aparece nada ya que el while loop solo funciona cuando la condición se cumple en este caso le eestoy diciendo que empiece por 10 pero el indice empieza por 20.

//   i++; //incremento
// }


// DOO WHILE LOOP // la principal diferencia entre el while loop y el do while loop es que el while loop evalua la condición y si es falso no actua en cambio el do while loop no evalua y lo hace aunque sea falso

// DIFERENCIAAAAAA ENTRE WHILE Y DO WHILE: el do while se ejecuta al menos una vez aunque la condfición no se cumpla y el while tiene que revisar que la condición se cumpla para que se pueda utilizar

let i = 200; 

do { //el do while ejecuta el codigo al menos una vez y después evalua
 
    console.log(i);

    i++;
} while( i < 10);