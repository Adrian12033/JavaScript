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

// const carrito = [
//     {nombre: "Monitor 20 pulgadas", precio: 500},
//     {nombre: " Tele", precio: 300},
//     {nombre: "Ipad", precio: 200},
//     {nombre: "Movil", precio: 700},
//     {nombre: "Teclado", precio: 300},
//     {nombre: "PC", precio: 1500},
// ]  

// for (i = 0; i< carrito.length; i++) { // el .length es para que recorra todo lo que hay dentro del carrito
//     console.log(carrito[i].nombre);
// }


//WHILE LOOP //se ejecuta mientras una condicion sea verdadera

let i = 0; //indice

while (i < 100) { // condicion

    if (i % 2 === 0) {
        console.log(`El numero ${i} es PAR`);
    } else{
        console.log(`El número ${i} es IMPAR`);
    }

    i++; //incremento
}


// DOO WHILE LOOP