const connect = require("../../db/connect/connect");
const { ObjectId } = require("mongodb");

module.exports = class Clientes extends connect {
    constructor() {
        super();
    }

    async crearUsuario(codigo, id_tipo_de_categoria, nombre, apellido, nick, email, telefono) {
        try {
            await this.open();
            const clientesCollection = this.db.collection("cliente");

            const nuevoUsuario = {
                codigo: await this.generarCodigoUnico(clientesCollection),
                id_tipo_de_categoria,
                nombre,
                apellido,
                nick,
                email,
                telefono
            };

            const resultado = await clientesCollection.insertOne(nuevoUsuario);

            return {
                success: true,
                usuarioId: resultado.insertedId,
                message: "Usuario creado exitosamente."
            };
        } catch (error) {
            console.error("Error al crear usuario:", error);
            throw error;
        }
    }

    async generarCodigoUnico(clientesCollection) {
        const ultimoUsuario = await clientesCollection.find().sort({ codigo: -1 }).limit(1).toArray();
        if (ultimoUsuario.length === 0) {
            return 1; 
        } else {
            return ultimoUsuario[0].codigo + 1; 
        }
    }
};
