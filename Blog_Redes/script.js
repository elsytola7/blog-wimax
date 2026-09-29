// ================================
// BOTÓN VOLVER ARRIBA
// ================================

const botonArriba = document.getElementById("arriba");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        botonArriba.style.display = "block";

    } else {

        botonArriba.style.display = "none";

    }

});


// Cuando hacemos clic, vuelve al inicio

botonArriba.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================================
// ANIMACIÓN AL APARECER
// ================================

const elementos = document.querySelectorAll(
    ".tarjeta, .persona, .empresa, .ventajas div, .evento"
);

const observador = new IntersectionObserver(

    function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                entrada.target.style.opacity = "1";
                entrada.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


// Estado inicial

elementos.forEach(function (elemento) {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(30px)";
    elemento.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observador.observe(elemento);

});


// ================================
// MENSAJE DE BIENVENIDA
// ================================

console.log(
    "📡 Bienvenido al blog de investigación sobre la tecnología WiMAX."
);