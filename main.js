const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const logo = document.querySelector("#logo");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

// logo.addEventListener("click", () => {
//   //enlace de la pagina que quieras
//   window.location.href = "./index.html";
// });


//carrusel
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-control.next');
const prevButton = document.querySelector('.carousel-control.prev');
let currentIndex = 0;

const updateCarousel = () => {
    // Elimina las clases activas para todos los slides
    slides.forEach(slide => slide.style.order = '');

    // Asigna el orden en el cual deben aparecer las imágenes
    for (let i = 0; i < slides.length; i++) {
        let index = (currentIndex + i) % slides.length;
        slides[i].style.order = index;
    }
};

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

// Inicializa el carrusel
updateCarousel();
