//API NOTIFICACIÓN

const boton = document.querySelector('#boton'); // esto de aquí hace referencia a todo el HTML, es decir, si quieres seleccionar algo del HTML debes iniciar con document siempre.

boton.addEventListener('click', () => { // con esto de aquí indicamos que queremos que haga el botón
    Notification.requestPermission(); // con esto de aqui nos preguntará si queremos recibir notificaciones
        then(resultado => console.log(`El resultado es ${resultado}`));
});