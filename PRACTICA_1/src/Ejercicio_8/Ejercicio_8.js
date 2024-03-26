let persona = {
    nombre: "Alex",
    apellidoPaterno: "Mendez",
    apellidoMaterno: "Moreira",
    edad: 20,
    genero: "Masculino",
    misDatos: function (){
        console.log("Estos son mis datos personales: ");
    }
};

function mostrarDatos(objeto){
    objeto.misDatos();
    console.log("Nombre: " + objeto.nombre);
    console.log("Apellido paterno: " + objeto.apellidoPaterno);
    console.log("Apellido materno: " + objeto.apellidoMaterno);
    console.log("Edad: " + objeto.edad);
    console.log("Género: " + objeto.genero);
}

mostrarDatos(persona);