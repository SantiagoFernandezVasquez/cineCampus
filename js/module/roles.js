const connect = require("../../db/connect/connect");

module.exports = class Roles extends connect {
    constructor() {
        super();
    }

    async crearRolAdministrador() {
        try {
            await this.open();

            const adminRole = {
                role: "Administrador",
                privileges: [
                    { resource: { db: "cineCampus", collection: "" }, actions: ["find", "insert", "update", "remove", "drop"] },
                    { resource: { db: "cineCampus", collection: "boleta" }, actions: ["find", "insert", "update"] },
                    { resource: { db: "cineCampus", collection: "cliente" }, actions: ["find", "insert", "update", "remove"] },
                    { resource: { db: "cineCampus", collection: "asientos" }, actions: ["find", "insert", "update", "remove"] }
                ],
                roles: [{ role: "readWrite", db: "cineCampus" }]
            };

            const result = await this.db.command({
                createRole: adminRole.role,
                privileges: adminRole.privileges,
                roles: adminRole.roles
            });

            console.log("Rol 'Administrador' creado con éxito.");
            return result;
        } catch (error) {
            console.error("Error al crear el rol Administrador:", error);
            throw error;
        }
    }
};