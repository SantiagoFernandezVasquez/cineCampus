const connect = require("../../db/connect/connect");

module.exports = class Boletos extends connect {
    constructor() {
        super();
    }

    async comprarBoleto(peliculaId, fecha, hora, cantidad) {
        try {
            await this.open();
            const boletosCollection = this.db.collection("boleta");

            const resultado = await boletosCollection.insertOne({
                peliculaId,
                fecha,
                hora,
                cantidad
            });

            return { disponible: true, boletoId: resultado.insertedId };
        } catch (error) {
            console.error("Error al comprar el boleto:", error);
            throw error;
        }
    }

    async verificarDisponibilidad(peliculaId, fecha, hora, cantidad) {
        try {
            await this.open();
            const asientosCollection = this.db.collection("asientos");

            const asientosDisponibles = await asientosCollection.find({
                peliculaId,
                fecha,
                hora,
                disponible: true
            }).toArray();

            if (asientosDisponibles.length >= cantidad) {
                return { disponible: true };
            } else {
                return { disponible: false, message: "No hay suficientes asientos disponibles." };
            }
        } catch (error) {
            console.error("Error al verificar la disponibilidad:", error);
            throw error;
        }
    }
};
