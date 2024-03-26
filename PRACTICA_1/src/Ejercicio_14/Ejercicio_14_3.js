// Seleccionamos el formulario por su ID
let formulario = document.getElementById('miFormulario');
let resultado = document.getElementById('resultado');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtenemos los valores de los campos del formulario
  let nombre = document.getElementById('nombre').value;
  let email = document.getElementById('email').value;

  // Validamos los campos
  if(nombre.trim() === "" || email.trim() === "") {
    resultado.textContent = "Por favor, completa todos los campos.";
  }
  
  if(!email.includes('@')) {
    resultado.textContent = "Por favor, introduce un email válido.";
  }

  // Si todo está correcto, mostramos un mensaje al usuario
  resultado.textContent = "gracias " + nombre + ", tu email " + email + " ha sido registrado con éxito.";
});