//FUNCIONES son una serie de instrucciones que realizan una función (son reutilizables)

//Declaración de la función

function sumar() {
    console.log(10+10);
}

sumar();

//Expresión de la función

const sumar2 = function() {
    console.log(3+3);
}

sumar2();

//IIFE son útiles para que no se mezclen con las variables de otros archivos

(function(){
    console.log('Esto es una función');
})();






