//API NOTIFICACIÓN

const boton = document.querySelector('#boton'); // esto de aquí hace referencia a todo el HTML, es decir, si quieres seleccionar algo del HTML debes iniciar con document siempre.

boton.addEventListener('click', () => {
 
    if(Notification.permission == 'granted') {
        new Notification('Esta es una notificación', {
            icon: 'img/ccj.png',
            body: 'Código con Juan, los mejores tutoriales'
        })
    }
    
})