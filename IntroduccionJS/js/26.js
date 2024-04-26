//THIS // hacew referencia al obejto sobre el cual se está haciendo llamar en la funcion para no estar escribiendo la variable de manera constante

const reservacion = {
    nombre: "Adrian",
    apellido: "Ordoñez Rossello",
    total: 600,
    pagado: false,
    informacio: function() { // una funcion dentro de un objeto, 
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagare es de ${this.total}`);
    }
}

console.log(reservacion.informacio());
