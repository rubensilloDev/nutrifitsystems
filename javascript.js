window.onscroll = () => {
    document.querySelectorAll('.benefit-row').forEach(row => {
        // Obtenemos la distancia de la tarjeta al techo de la pantalla
        const posicion = row.getBoundingClientRect().top;

        // Si la tarjeta está cerca del centro (entre 100px y 400px de altura)
        if (posicion > 100 && posicion < 400) {
            document.getElementById('benefit-num').innerText = row.dataset.step;
        }
    });
};
