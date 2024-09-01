const connect = require("../../db/connect/connect");

class Boletos extends connect {
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

            return resultado.insertedId;
        } catch (error) {
            console.error("Error al comprar el boleto:", error);
            throw error;
        }
    }
}

module.exports = Boletos;
