// ARREGLOS O ARRAYS

const numeros = [10,20,30,40,50];

console.table(numeros); //para que sea mas sencillo de ver

const meses = ['Enero','Febrero','Marzo','Abril', 'Mayo'];

console.table(meses);

// const arreglo = [10,'Enero',true,"si",null,{nombre: "Adrian", trabajo: "programador"}, [1,2,3]];

// console.log(arreglo);

//acceder a los valores de un arreglo

// console.log(numeros[4]);
// console.log(numeros[2]);

//conocer la extension de un arreglo

// console.log(meses.length);

//esta funcion de aqui sirve para que nos muestre todos los valores del array

// numeros.forEach(function(numero) { //esto se llama iterador
//     console.log(numero);
// })

//añadimos un nuevo valor al array

numeros[5] = 60;
numeros[6] = 70;
console.table(numeros);

numeros.push(80); //el push se utiliza para agregar automaticamente un valor al final de un array de manera automatica lo añadirá al final del array

numeros.unshift(-10,-20); //unshift sirve para añadir al principio del array

console.table(numeros);

//eliminar elementos de un array

// meses.pop();//elimina el ultimo del array
// meses.shift();//elimina el primero del array

// meses.splice(2, 1); //elimina el elemento de la posicion 2
// console.table(meses);

//Rest Operator o Spread Operator

const nuevoArreglo = [...meses, 'Junio']; // el ... copia los daotos del array meses
console.table(nuevoArreglo); //añadimos junio al array de los meses pero creando un array completamente nuevo


