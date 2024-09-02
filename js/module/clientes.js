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

    async obtenerDetallesUsuario(usuarioId) {
        try {
            await this.open();
            const clientesCollection = this.db.collection("cliente");

            const usuario = await clientesCollection.findOne({ _id: new ObjectId(usuarioId) });

            if (!usuario) {
                throw new Error("Usuario no encontrado.");
            }

            let rol;
            if (usuario.id_tipo_de_categoria === 1) {
                rol = "Usuario Estándar";
            } else if (usuario.id_tipo_de_categoria === 2) {
                rol = "Usuario Premium";
            } else if (usuario.id_tipo_de_categoria === 3) {
                rol = "Usuario VIP";
            } else if (usuario.id_tipo_de_categoria === 4) {
                rol = "Administrador";
            } else {
                rol = "Desconocido";
            }

            const detallesUsuario = {
                _id: usuario._id,
                codigo: usuario.codigo,
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                nick: usuario.nick,
                email: usuario.email,
                telefono: usuario.telefono,
                rol: rol,
                esVIP: usuario.id_tipo_de_categoria === 3
            };

            return detallesUsuario;
        } catch (error) {
            console.error("Error al obtener detalles del usuario:", error);
            throw error;
        }
    }

    async actualizarRolUsuario(usuarioId, nuevoRol) {
        try {
            await this.open();
            const clientesCollection = this.db.collection("cliente");

            const resultado = await clientesCollection.updateOne(
                { _id: new ObjectId(usuarioId) },
                { $set: { id_tipo_de_categoria: nuevoRol } }
            );

            if (resultado.matchedCount === 0) {
                throw new Error("Usuario no encontrado.");
            }

            return { mensaje: "Rol actualizado correctamente." };
        } catch (error) {
            console.error("Error al actualizar rol del usuario:", error);
            throw error;
        }
    }

    async listarUsuarios(rol) {
        try {
            await this.open();
            const clientesCollection = this.db.collection("cliente");

            const filtro = rol ? { id_tipo_de_categoria: rol } : {};

            const usuarios = await clientesCollection.find(filtro).toArray();

            return { usuarios };
        } catch (error) {
            console.error("Error al listar usuarios:", error);
            throw error;
        }
    }
};
