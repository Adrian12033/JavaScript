async function obtenerEmpleados() {

    const archivo = 'js/empleados.json';

    // fetch(archivo) //coge el archivo json pero tambien puede coger urls 
    //     .then(resultado => resultado.json())
    //     .then (datos => { 
    //         const { empleados } = datos;

    //         // console.log(empleados);

    //         empleados.forEach(empleados => { //para tener los objetos de forma infividual
    //             // console.log(empleados);
    //             console.log(empleados.id);
    //             console.log(empleados.nombre);
    //             console.log(empleados.puesto);
    //         })

    //     })

    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);

}

obtenerEmpleados();