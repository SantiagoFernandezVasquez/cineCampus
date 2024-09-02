// const Peliculas = require("./js/module/peliculas");
// const Boletos = require("./js/module/boletas");
// const Tarjetas = require("./js/module/tarjetas");
const Clientes = require("./js/module/clientes");

// const peliculas = new Peliculas();
// const boletos = new Boletos();
// const tarjetas = new Tarjetas();
const clientes = new Clientes();

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

// const verificarDisponibilidad = async (peliculaId, fecha, hora) => {
//     try {
//         const resultado = await boletos.verificarDisponibilidad(peliculaId, fecha, hora);
//         if (resultado.disponible) {
//             console.log(`Asientos disponibles: ${resultado.asientosDisponibles}`);
//         } else {
//             console.log("No hay asientos disponibles.");
//         }
//     } catch (error) {
//         console.error("Error al verificar la disponibilidad de asientos:", error);
//     }
// };

// const peliculaId = "66d0dca8eec85678b0fb0d76"; 
// const fecha = "2024-09-10";
// const hora = "18:00";

// verificarDisponibilidad(peliculaId, fecha, hora);

// const aplicarDescuento = async (usuarioId, montoOriginal) => {
//     try {
//         const montoConDescuento = await tarjetas.aplicarDescuento(usuarioId, montoOriginal);
//         console.log("Monto con descuento aplicado:", montoConDescuento);
//     } catch (error) {
//         console.error("Error al aplicar el descuento:", error);
//     }
// };

// const usuarioId = "66d0dc08eec85678b0fb0d64";
// const montoOriginal = 100;

// aplicarDescuento(usuarioId, montoOriginal);

// const crearUsuario = async (id_tipo_de_categoria, nombre, apellido, nick, email, telefono) => {
//     try {
//         const resultado = await clientes.crearUsuario(null, id_tipo_de_categoria, nombre, apellido, nick, email, telefono);
//         if (resultado.success) {
//             console.log("Usuario creado con ID:", resultado.usuarioId);
//         } else {
//             console.log("No se pudo crear el usuario:", resultado.message);
//         }
//     } catch (error) {
//         console.error("Error al crear el usuario:", error);
//     }
// };

// const id_tipo_de_categoria = 2; // 1 = Regular, 2 = Premium, 3 = VIP, 4 = Administrador
// const nombre = "Juan";
// const apellido = "Pérez";
// const nick = "juan_p";
// const email = "juan.perez@example.com";
// const telefono = {
//     casa: "555-1234",
//     movil: "555-5678"
// };

// crearUsuario(id_tipo_de_categoria, nombre, apellido, nick, email, telefono);

const obtenerDetallesUsuario = async (usuarioId) => {
    try {
        const detalles = await clientes.obtenerDetallesUsuario(usuarioId);
        console.log("Detalles del usuario:", detalles);
    } catch (error) {
        console.error("Error al obtener los detalles del usuario:", error);
    }
};

const usuarioId = "66d0dc08eec85678b0fb0d65";
obtenerDetallesUsuario(usuarioId);