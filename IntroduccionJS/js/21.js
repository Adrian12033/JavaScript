//ARROW FUNCTIONS

const sumar2 = (n1, n2) => console.log(n1 + n2); //ya que solo es una sola línea se pueden eliminar las llaves

sumar2(5, 10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`) //en este caso quitamos los parentesis ya que es un solo parámetro 

aprendiendo('JavaScript');






//ARRAY METHODS

const meses = ['Enero','Febrero','Marzo','Abril', 'Mayo'];

const carrito = [
    {nombre: "Monitor 20 pulgadas", precio: 500},
    {nombre: " Tele", precio: 300},
    {nombre: "Ipad", precio: 200},
    {nombre: "Movil", precio: 700},
    {nombre: "Teclado", precio: 300},
    {nombre: "PC", precio: 1500},
]


meses.forEach( mes => {
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

let resultado;

resultado = carrito.some (producto => producto.nombre === 'Movil');

console.log(resultado);



resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

console.log(resultado);



resultado = carrito.filter (producto => producto.precio > 400);

console.log(resultado);



resultado = carrito.filter (producto => producto.nombre === 'Movil');

console.log(resultado);
