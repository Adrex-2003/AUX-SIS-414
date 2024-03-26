// 14.2  Ejemplo utilizar un evento en el DOM.
function mensaje() {
    alert("Hiciste click");
}
let button = document.getElementById("enviar");
button.addEventListener("click", mensaje);
    