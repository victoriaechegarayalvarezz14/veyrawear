document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[href^="#"]').forEach((enlace) => {
        enlace.addEventListener("click", (evento) => {
            const destino = enlace.getAttribute("href");

            if (!destino || destino === "#") return;

            const seccion = document.querySelector(destino);

            if (seccion) {
                evento.preventDefault();

                seccion.scrollIntoView({
                    behavior: window.matchMedia(
                        "(prefers-reduced-motion: reduce)"
                    ).matches ? "auto" : "smooth",
                    block: "start"
                });
            }
        });
    });
});