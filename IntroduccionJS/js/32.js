// Async / await

// el async devuelve una promesa y con el await hacemos que el valor tenga una pausa

function descargarNuevosClientes () {
    return new Promise (resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 5000);

    })
}

function descargarNuevosPedidos () {
    return new Promise (resolve => {
        console.log('Descargando ultimos pedidos...');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados')
        }, 3000);

    })
}

async function app() {
    try {

        // const clientes = await descargarNuevosClientes ();
        // const pedidos = await descargarNuevosPedidos(); //con esto de aquí carga primero una llamada y luego la otra
        // console.log(clientes);
        // console.log(pedidos);

        const resultado = await Promise.all ([descargarNuevosClientes(), descargarNuevosPedidos()]); //esto ejecuta las dos funciones al mismo tiempo
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();

// setTimeout(function() { // tiempo de espera para que se ejecute esta funcion
//     console.log('set timeout...')
// }, 5000); // 5 segundos

// setInterval(function() { // este es para que lo mande cada x segundos a la consola 
//     console.log('set timeout...')
// }, 3000); 