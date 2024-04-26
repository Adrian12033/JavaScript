//para ver si una condiciñon se umple o no

// const puntuaje = 1001;

// if (puntuaje == 1000) {
//     console.log('Si el puntaje es 1000');
// } else {
//     console.log('No es igual');
// }

// const efectivo = 1000;
// const carrito = 800;

// if (efectivo > carrito) {
//     console.log('Te basta para pagar la compra');
// } else {
//     console.log('No te basta para pagar la compra');
// }

const rol = 'EDITOR';

if (rol === 'ADMINISTRADOR' ) { //revisamos una condición
    console.log('ACCESO A TODO EL SISTEMA');

}else if (rol === 'EDITOR') { // revisamos por segunda vez una condición
    console.log('eres editor, puedes entrar');
}

else { //si no se cumple ninguna de las dos condiciones anterioires pasaremos al else
    console.log('NO TIENES ACCESO');
}
