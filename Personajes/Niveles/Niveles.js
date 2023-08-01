// Obtener los elementos necesarios
const botonesPersonaje = document.querySelectorAll(".Personaje");
const imagen = document.getElementById("imagen");

// Función para mostrar la imagen del personaje seleccionado
function mostrarImagen(event) {
  const boton = event.target;
  const nombre = boton.dataset.nombre;
  const imagenSrc = boton.dataset.imagen;

  imagen.src = imagenSrc;
  imagen.alt = nombre;
}

// Agregar los event listeners a los botones
botonesPersonaje.forEach((boton) => {
  boton.addEventListener("click", mostrarImagen);
});
