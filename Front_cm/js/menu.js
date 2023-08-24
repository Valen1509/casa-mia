const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Cambiar de diapositiva cada 3 segundos
setInterval(nextSlide, 3000);

// Mostrar la primera diapositiva al cargar la página
showSlide(currentSlide);
