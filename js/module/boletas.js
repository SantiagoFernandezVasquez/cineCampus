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
};
