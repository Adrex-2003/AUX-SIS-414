/*
14.1  El DOM, o Document Object Model (Modelo de Objetos del Documento), 
es una interfaz de programación para documentos HTML y XML. Esencialmente, 
el DOM representa la estructura del documento como un árbol de nodos, 
donde cada nodo representa una parte del documento, como elementos HTML, 
atributos, texto, etc. El DOM proporciona una representación estructurada del documento,
 permitiendo a los programas y scripts acceder y manipular dinámicamente el contenido, 
 estructura y estilo del documento*/

// Modificar un elemento existente
function modificarElemento(){
    let miDiv = document.getElementById("miDiv");
    miDiv.innerHTML = "Este es mi div modificado";
}

 // Crear un nuevo elemento
function crearElemento(){
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Este es un nuevo párrafo";
    document.body.appendChild(nuevoParrafo);
}
 
// Eliminar un elemento existente
function eliminarElemento(){
    const elementoAEliminar = document.getElementById("miDiv");
    elementoAEliminar.remove();
}

