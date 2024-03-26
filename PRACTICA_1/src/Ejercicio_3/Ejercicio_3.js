let miPeliculaFavorita = {
    titulo: "CHAPPIE",
    director: "Neill Blomkamp",
    anioLanzamiento: 2015,
    duracionHoras: 2,
    genero: "Ciencia ficción",
    imprimir: function (){
        console.log("*************Datos sobre mi pelicula favorita**************");
    }
};
miPeliculaFavorita.imprimir();
console.log("Título: " + miPeliculaFavorita.titulo);
console.log("Director: " + miPeliculaFavorita.director);
console.log("Año de Lanzamiento: " + miPeliculaFavorita.anioLanzamiento);
console.log("Horas de duración: " + miPeliculaFavorita.duracionHoras);
console.log("Género: " + miPeliculaFavorita.genero);