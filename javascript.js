// MENU MOVIL 
const menuHamburguesa = document.querySelector('.menu-movil')
const contenidoMenu = document.querySelector('.grupo-derecho-navegacion')

menuHamburguesa.addEventListener('click', () => {
    contenidoMenu.classList.toggle('menu-abierto')
    menuHamburguesa.classList.toggle('menu-cerrar')

})

btnCerrarMenu.addEventListener('click', () => {
    contenidoMenu.classList.remove('menu-abierto')
})


// PESTAÑAS DE SERVICIOS
const panelProfesional = document.getElementById('panel-profesional');
const panelUsuario = document.getElementById('panel-usuario');
const btnTabProfesional = document.getElementById('btn-tab-profesional');
const btnTabUsuario = document.getElementById('btn-tab-usuario');


if (btnTabProfesional && btnTabUsuario) {
    btnTabProfesional.addEventListener('click', () => {
        btnTabProfesional.classList.add('btn-activo');
        btnTabUsuario.classList.remove('btn-activo');
        panelProfesional.classList.remove('oculto');
        panelUsuario.classList.add('oculto');
    });

    btnTabUsuario.addEventListener('click', () => {
        btnTabUsuario.classList.add('btn-activo');
        btnTabProfesional.classList.remove('btn-activo');
        panelUsuario.classList.remove('oculto');
        panelProfesional.classList.add('oculto');
    });
}

// PESTAÑAS DE PRECIOS
const btnPrecioUsuario = document.getElementById('btn-precio-usuario');
const btnPrecioProfesional = document.getElementById('btn-precio-profesional');
const panelPrecioUsuario = document.getElementById('panel-precio-usuario');
const panelPrecioProfesional = document.getElementById('panel-precio-profesional');

if (btnPrecioUsuario && btnPrecioProfesional) {
    btnPrecioProfesional.addEventListener('click', () => {
        btnPrecioProfesional.classList.add('btn-activo');
        btnPrecioUsuario.classList.remove('btn-activo');
        panelPrecioProfesional.classList.remove('oculto');
        panelPrecioUsuario.classList.add('oculto');
    });

    btnPrecioUsuario.addEventListener('click', () => {
        btnPrecioUsuario.classList.add('btn-activo');
        btnPrecioProfesional.classList.remove('btn-activo');
        panelPrecioUsuario.classList.remove('oculto');
        panelPrecioProfesional.classList.add('oculto');
    });
}


// PREGUNTAS FRECUENTES
const preguntaHeader = document.querySelectorAll('.pregunta-header')
const iconoFaq = document.querySelectorAll('.icono-faq-cerrar')
const respuestaFaq = document.querySelectorAll('.respuesta-faq')

// recorremos cada pregunta y le añadimos el eventlisener
preguntaHeader.forEach(pregunta => {
    pregunta.addEventListener('click', () => {

        // y cada vez que le demos a un click recogemos la respuesta y el icono que esten dentro de su " padre"
        const respuesta = pregunta.parentElement.querySelector('.respuesta-faq')
        const icono = pregunta.parentElement.querySelector('.icono-faq')
        respuesta.classList.toggle('respuesta-visible')
        icono.classList.toggle('icono-faq-cerrar')


    })
})




// libreria sacada de: https://github.com/darkroomengineering/lenis/blob/main/README.md
// 1. Inicializamos Lenis
const lenis = new Lenis({
    duration: 1.5,   // Duración del scroll 
    smoothWheel: true // Activa el scroll fluido 
});

// bucle de la libreria para que funcione en cada fotograma 
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
// activación del bucle
requestAnimationFrame(raf);