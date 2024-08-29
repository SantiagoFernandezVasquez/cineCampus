const connect = require("../../db/connect/connect");
const { ObjectId } = require("mongodb");

module.exports = class Tarjetas extends connect {
    constructor() {
        super();
    }

    async aplicarDescuento(usuarioId, montoOriginal) {
        try {
            await this.open();
            const clientesCollection = this.db.collection("cliente");

            const objectId = new ObjectId(usuarioId);

            const usuario = await clientesCollection.findOne({ _id: objectId });

            if (!usuario) {
                throw new Error("Usuario no encontrado.");
            }

            if (usuario.id_tipo_de_categoria === 3) {
                const descuento = montoOriginal * 0.10;
                const montoConDescuento = montoOriginal - descuento;
                return montoConDescuento;
            } else {
                return montoOriginal;
            }
        } catch (error) {
            console.error("Error al aplicar descuento:", error);
            throw error;
        }
    }
};
