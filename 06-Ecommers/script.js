let slideIndex = 0;
let titulos = ["Título de la Imagen 1", "Título de la Imagen 2", "Título de la Imagen 3"];
let descripciones = [
    "Descripción de la Imagen 1. Este es un texto de ejemplo para la primera imagen.",
    "Descripción de la Imagen 2. Este es un texto de ejemplo para la segunda imagen.",
    "Descripción de la Imagen 3. Este es un texto de ejemplo para la tercera imagen."
];

// Muestra la primera imagen al cargar la página
mostrarSlide(slideIndex);

function mostrarSlide(n) {
    let slides = document.getElementsByClassName("slide");
    let puntos = document.getElementsByClassName("punto");

    // Reinicia el índice si es necesario
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }

    // Oculta todas las imágenes
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Desactiva todos los puntos
    for (let i = 0; i < puntos.length; i++) {
        puntos[i].className = puntos[i].className.replace(" activo", "");
    }

    // Muestra la imagen actual y activa su punto correspondiente
    slides[slideIndex].style.display = "block";
    puntos[slideIndex].className += " activo";

    // Actualiza el título y la descripción
    document.getElementById("titulo").textContent = titulos[slideIndex];
    document.getElementById("descripcion").textContent = descripciones[slideIndex];
}

// Función para avanzar automáticamente
function avanzarSlide() {
    slideIndex++;
    if (slideIndex >= document.getElementsByClassName("slide").length) {
        slideIndex = 0;
    }
    mostrarSlide(slideIndex);
}

// Cambia la imagen cada 3 segundos
setInterval(avanzarSlide, 3000);