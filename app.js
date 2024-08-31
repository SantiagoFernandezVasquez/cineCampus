const Peliculas = require("./js/module/peliculas");

const peliculas = new Peliculas();

peliculas.mostrarPeliculasCartelera()
  .then(peliculas => {
    console.log(peliculas);
  })
  .catch(error => {
    console.error("Error al obtener las películas:", error);
  });
