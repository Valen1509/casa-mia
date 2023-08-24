document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const mensajeEnviado = document.getElementById("mensaje-enviado");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        setTimeout(function () {
            mensajeEnviado.classList.remove("hidden");
            form.reset();
            setTimeout(function () {
                mensajeEnviado.classList.add("hidden");
            }, 4000);
        }, 1000);
    });
});
