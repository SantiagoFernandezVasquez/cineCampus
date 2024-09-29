const { MongoClient } = require('mongodb');

module.exports = class Connect {
    connection;
    db;
    static instanceConnect;

    constructor() {
        if (Connect.instanceConnect) return Connect.instanceConnect;
        Connect.instanceConnect = this;
        return Connect.instanceConnect;
    }

    async open() {
        const uri = `${process.env.MONGO_PROTOCOL}${process.env.MONGO_USER}:${process.env.MONGO_PWS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_NAME}`;
        console.log("URI de conexión:", uri);
        try {
            this.connection = new MongoClient(uri);
            await this.connection.connect();
            this.db = this.connection.db(process.env.MONGO_NAME);
            if (!this.db) {
                throw new Error("No se pudo conectar a la base de datos.");
            }
        } catch (error) {
            console.error("Error en la URI o en la conexión:", error);
            throw error;
        }
    }
}
