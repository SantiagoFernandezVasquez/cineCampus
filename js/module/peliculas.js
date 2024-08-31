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
};