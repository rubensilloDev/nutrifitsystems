// MENU MOVIL 
const menuHamburguesa = document.querySelector('.menu-movil')
const contenidoMenu = document.querySelector('.grupo-derecho-navegacion')

// cuando el demos click al menu movil, se activara/desacturam¡vará com un interruptor lo que serai el contenido del menu que es grupo derecho navegacion, y tb se pondra o quitara el menu-hamburguesa-cerrar
menuHamburguesa.addEventListener('click', () => {
    contenidoMenu.classList.toggle('menu-abierto')
    menuHamburguesa.classList.toggle('menu-cerrar')

})

// PESTAÑAS DE SERVICIOS
const panelProfesional = document.getElementById('panel-profesional');
const panelUsuario = document.getElementById('panel-usuario');
const btnTabProfesional = document.getElementById('btn-tab-profesional');
const btnTabUsuario = document.getElementById('btn-tab-usuario');

// cuando se le de click al botn del tb profesional, le añadiremos la clase btn-activo, se la quitaremos al btn-usuario y le quitaremos al panel profesioanl la clase .oculto
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


// PESTAÑAS DE PRECIOS
const btnPrecioUsuario = document.getElementById('btn-precio-usuario');
const btnPrecioProfesional = document.getElementById('btn-precio-profesional');
const panelPrecioUsuario = document.getElementById('panel-precio-usuario');
const panelPrecioProfesional = document.getElementById('panel-precio-profesional');


btnPrecioProfesional.addEventListener('click', () => {
    // se le añade la clase bnt-activo al btn profesional para que coja los estilos del btn
    btnPrecioProfesional.classList.add('btn-activo');
    btnPrecioUsuario.classList.remove('btn-activo');

    // y se le quita al panel de los precios la clase .oculto para que se muestre
    panelPrecioProfesional.classList.remove('oculto');
    panelPrecioUsuario.classList.add('oculto');
});

btnPrecioUsuario.addEventListener('click', () => {
    btnPrecioUsuario.classList.add('btn-activo');
    btnPrecioProfesional.classList.remove('btn-activo');
    panelPrecioUsuario.classList.remove('oculto');
    panelPrecioProfesional.classList.add('oculto');
});



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





// libreria para el scroll, sacada de: https://github.com/darkroomengineering/lenis/blob/main/README.md

// Inicializamos Lenis
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





// libreria para poner animaciones de scroll de manera sencilla que la he sacado de: https://vabadus.es/blog/otros/anade-efectos-a-tu-web-con-la-libreria-aos
// Inicializar AOS
AOS.init({
    duration: 800, // duraciónd e la animacion
    once: true,     // Se anima solo la primera vez que se ve
    offset: 100,
});


lenis.on('scroll', () => {
    AOS.refresh();
});
