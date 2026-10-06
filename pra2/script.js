document.addEventListener('DOMContentLoaded', () => {

    // Función auxiliar para renderizar resultados sin usar la etiqueta div
    const mostrarResultado = (containerId, mensaje) => {
        const contenedor = document.getElementById(containerId);
        if (contenedor) {
            contenedor.style.display = 'block';
            contenedor.innerHTML = `<p>${mensaje}</p>`;
        }
    };

    // 1. Formulario Disco
    const formDisco = document.getElementById('form-disco');
    if (formDisco) {
        formDisco.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = document.getElementById('disco-nombre').value;
            const genero = document.getElementById('disco-genero').value;
            const artista = document.getElementById('disco-artista').value;

            mostrarResultado('res-disco', `<strong>Disco registrado:</strong> ${nombre} (${genero}) por ${artista}.`);
            e.target.reset();
        });
    }

    // 2. Formulario Cantante
    const formCantante = document.getElementById('form-cantante');
    if (formCantante) {
        formCantante.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = document.getElementById('cantante-nombre').value;
            const edad = document.getElementById('cantante-edad').value;
            const genero = document.querySelector('input[name="genero"]:checked').value;
            const trayectoria = document.getElementById('cantante-trayectoria').value;

            mostrarResultado('res-cantante', `<strong>Cantante registrado:</strong> ${nombre}, ${edad} años, Género: ${genero}, ${trayectoria} años de trayectoria.`);
            e.target.reset();
        });
    }

    // 3. Formulario Canción
    const formCancion = document.getElementById('form-cancion');
    if (formCancion) {
        formCancion.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = document.getElementById('cancion-nombre').value;
            const duracion = document.getElementById('cancion-duracion').value;
            const compositor = document.getElementById('cancion-compositor').value;
            const cantante = document.getElementById('cancion-cantante').value;

            mostrarResultado('res-cancion', `<strong>Canción registrada:</strong> "${nombre}" (${duracion}) - Compuesta por ${compositor}, interpretada por ${cantante}.`);
            e.target.reset();
        });
    }

    // 4. Formulario Playlist
    const formPlaylist = document.getElementById('form-playlist');
    if (formPlaylist) {
        formPlaylist.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = document.getElementById('playlist-nombre').value;
            const usuario = document.getElementById('playlist-usuario').value;

            mostrarResultado('res-playlist', `<strong>Playlist creada:</strong> "${nombre}" asignada al usuario ${usuario}.`);
            e.target.reset();
        });
    }

});
