const { ObjectId } = require("mongodb");
const connect = require("../../db/connect/connect");

module.exports = class pelicula extends connect {
    constructor() {
        super();
    }
    
    async mostrarPeliculasCartelera() {
        try {
            await this.open();
            this.collectionPelicula = this.db.collection("pelicula");
            let peliculas = await this.collectionPelicula.find().toArray();
            return peliculas;
        } catch (error) {
            console.error("Error al mostrar las películas:", error);
            throw error;
        }
    }

    async obtenerDetallesPelicula(id) {
        try {
            await this.open();
            this.collectionPelicula = this.db.collection("pelicula");
            const objectId = new ObjectId(id); 
            const pelicula = await this.collectionPelicula.findOne({ _id: objectId });
            if (!pelicula) {
                throw new Error(`Película con ID ${id} no encontrada`);
            }
            return pelicula;
        } catch (error) {
            console.error("Error al obtener los detalles de la película:", error);
            throw error;
        }
    }
};