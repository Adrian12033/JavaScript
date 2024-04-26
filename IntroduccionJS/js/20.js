//Metodos de propiedad

const reproductor = {
    reproducir : function(id){
        console.log(`Resproduionedo Cancion con el id: ${id}`);
    },
    pausar : function(){
        console.log('Pausando...')
    },
    crearPlaylist : function(nombre) {
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproducirPlaylist : function(nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`)
    },
}

reproductor.borrarCancion = function(id){ //agregar propiedades por fuera del objeto
    console.log(`Eliminando la canción: ${id}`);
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(23);
reproductor.crearPlaylist('Temazos');
reproductor.reproducirPlaylist('Temazos');

//lo que estamos haciendo aquí es crear un objeto en el cual dentro de el tenemos una funcion, para llamar esa función deberemos llamar primero al objeto y luego a la función de la manera indicada 
