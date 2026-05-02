const panelProfresional = document.getElementById('panel-profesional');
const panelUsuario = document.getElementById('panel-usuario');
const btnProfresional = document.getElementById('btn-tab-profesional');
const btnUsuario = document.getElementById('btn-tab-usuario');

// si al boton profesional se le da click se le pone la clase activo yu al btn del usuario se la quita 
btnProfresional.addEventListener('click', () => {
    btnProfresional.classList.add('btn-activo')
    btnUsuario.classList.remove('btn-activo')

    // y luego se comprueba que tiene la clase oculto, si la tiene, se le borra u se le añade al btn ususario y si no, nada
    if (panelProfresional.classList.contains('oculto')) {
        panelProfresional.classList.remove('oculto')
        panelUsuario.classList.add('oculto')
    }
})

btnUsuario.addEventListener('click', () => {
    btnUsuario.classList.add('btn-activo')
    btnProfresional.classList.remove('btn-activo')

    if (panelUsuario.classList.contains('oculto')) {
        panelUsuario.classList.remove('oculto')
        panelProfresional.classList.add('oculto')
    }
})
