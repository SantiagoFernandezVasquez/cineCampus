// const Peliculas = require("./js/module/peliculas");
const Boletos = require("./js/module/boletas");

// const peliculas = new Peliculas();
const boletos = new Boletos();

// function mostrarPeliculas() {
//     peliculas.mostrarPeliculasCartelera()
//         .then(peliculas => {
//             console.log("Películas en cartelera:", peliculas);
//         })
//         .catch(error => {
//             console.error("Error al obtener las películas:", error);
//         });
// }

// mostrarPeliculas();

// async function obtenerDetallesPelicula(id) {
//     try {
//         const detalles = await peliculas.obtenerDetallesPelicula(id);
//         console.log("Detalles de la película:", detalles);
//     } catch (error) {
//         console.error("Error al obtener los detalles de la película:", error);
//     }
// }



// const idPelicula = '66d0dc76eec85678b0fb0d6c';
// obtenerDetallesPelicula(idPelicula);


// const comprarBoleto = async (peliculaId, fecha, hora, cantidad) => {
//     try {
//         const resultado = await boletos.comprarBoleto(peliculaId, fecha, hora, cantidad);
//         if (resultado.disponible) {
//             console.log("Boleto comprado con ID:", resultado.boletoId);
//         } else {
//             console.log("No se pudo comprar el boleto:", resultado.message);
//         }
//     } catch (error) {
//         console.error("Error al comprar el boleto:", error);
//     }
// };

// const peliculaId = "66d0dc76eec85678b0fb0d6c"; 
// const fecha = "2024-09-10";
// const hora = "18:00";
// const cantidad = 2;

// comprarBoleto(peliculaId, fecha, hora, cantidad);

const verificarDisponibilidad = async (peliculaId, fecha, hora) => {
    try {
        const resultado = await boletos.verificarDisponibilidad(peliculaId, fecha, hora);
        if (resultado.disponible) {
            console.log(`Asientos disponibles: ${resultado.asientosDisponibles}`);
        } else {
            console.log("No hay asientos disponibles.");
        }
    } catch (error) {
        console.error("Error al verificar la disponibilidad de asientos:", error);
    }
};

const peliculaId = "66d0dca8eec85678b0fb0d76"; 
const fecha = "2024-09-10";
const hora = "18:00";

verificarDisponibilidad(peliculaId, fecha, hora);