//PROMISES refleja el valor que pueda estar disponible ahora, en un futuro o nunca 

const usuarioAutenticado = new Promise( (resolve, reject) => { //arrow function, cuando se ejecuta el promise se pasan dos valores automaticamente, el resolve y el reject. resolve se ejecuta cuando el promise se cumple
    
    const autenticado = false;

    if (autenticado) {
        resolve('Usuario autenticado'); // el pomise se cumple
    }else {
        reject('No se pudo iniciar sesion'); // el promise no se cumple
    }

});


usuarioAutenticado
    .then(resultado => console.log(resultado))// poniendo el resultado ahí estamos leyendo lo que nos da el promise
    .catch(error => console.log(error)); // el catch lo usamos para que coja el reject del promise

console.log(usuarioAutenticado);


// en los promises se existen 3 valores distintos: 
// Pending: no se ha cumplido pero tampoco se ha rechazado
// Fulfilled: ya se cumplio
// Rejected: Se ha rechazado o no se pudo cumplir