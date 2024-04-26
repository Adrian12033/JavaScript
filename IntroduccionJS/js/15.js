//ARRAY METHODS

const meses = ['Enero','Febrero','Marzo','Abril', 'Mayo'];

const carrito = [
    {nombre: "Monitor 20 pulgadas", precio: 500},
    {nombre: " Tele", precio: 900},
    {nombre: "Ipad", precio: 200},
    {nombre: "Movil", precio: 700},
    {nombre: "Teclado", precio: 300},
    {nombre: "PC", precio: 1500},
]

//forEACH

meses.forEach(function(mes){
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

//INCLUDES para ver si existe marzo en el array de meses PARA CUANDO ES UN ARRAY PLANO SIN OBJETOS

let resultado = meses.includes('Marzo');

//SOME ideal para arreglo de objetos

resultado = carrito.some (producto => producto.nombre === 'Movil');

//REDUCE para que sume todo el carrito 

resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0);

//FILTER para filtrar sobre los objetos que tenemos en el array 

resultado = carrito.filter (function(producto){
    return producto.precio > 400;
});

resultado = carrito.filter (function(producto){
    return producto.nombre === 'Movil';
});

console.log(resultado);