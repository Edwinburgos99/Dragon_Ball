// Asignar los eventos onclick usando addEventListener
const personajes = document.querySelectorAll(".Personaje");
personajes.forEach((personaje) => {
  personaje.addEventListener("click", mostrarImagen);
});

// Código JavaScript para mostrar la imagen
function mostrarImagen(event) {
  const personaje = event.target
    .getAttribute("class")
    .split(" ")
    .find((className) => className !== "Personaje");
  const imagen = document.querySelector(
    `.${personaje.toLowerCase()}-container .personaje-image`
  );
  const contenedor = document.querySelector(
    `.${personaje.toLowerCase()}-container`
  );

  if (contenedor.style.display === "block") {
    // Si la imagen está visible, ocultarla
    contenedor.style.display = "none";
  } else {
    // Si la imagen está oculta, mostrarla
    imagen.src = `../../Img/${personaje}_Level.png`;
    contenedor.style.display = "block";
  }
}
