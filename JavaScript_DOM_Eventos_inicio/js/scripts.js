//querySelector 

const heading = document.querySelector('#heading') //devuelve 0 o 1 elemento
heading.textContent = 'Nuevo heading'; //para cambiar el contenido
heading.classList.add('nueva_clase'); // para añadir una nueva clase al heading

console.log(heading);

//querySelectorAll // devuelve 0 o todos los selectores 

const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces[0]); //esto de aquí nos mostrara el enlace que se encuentra en la posición 0

//getElementById //esto de aquí es para referirse a un ID

const heading2 = document.getElementById('heading');
console.log(heading2);

//Generar un nuevo enlace


