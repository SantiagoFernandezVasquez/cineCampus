const Peliculas = require("./js/module/peliculas");

const peliculas = new Peliculas();

// function mostrarPeliculas() {
//     peliculas.mostrarPeliculasCartelera()
//         .then(peliculas => {
//             console.log("Películas en cartelera:", peliculas);
//         })
//         .catch(error => {
//             console.error("Error al obtener las películas:", error);
//         });
// }

async function obtenerDetallesPelicula(id) {
    try {
        const detalles = await peliculas.obtenerDetallesPelicula(id);
        console.log("Detalles de la película:", detalles);
    } catch (error) {
        console.error("Error al obtener los detalles de la película:", error);
    }
}

// mostrarPeliculas();

const idPelicula = '66d0dc76eec85678b0fb0d6c';
obtenerDetallesPelicula(idPelicula);
