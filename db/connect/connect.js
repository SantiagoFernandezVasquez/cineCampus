const { MongoClient } = require('mongodb')
module.exports = class connect {
    conection;
    db;
    static instanceConnect
    constructor() {
        if (connect.instanceConnect) return connect.instanceConnect
        connect.instanceConnect = this
        return connect.instanceConnect;
    }
    async open() {
        const uri = `${process.env.MONGO_PROTOCOL}${process.env.MONGO_USER}:${process.env.MONGO_PWS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_NAME}`;
        console.log("URI de conexión:", uri);
        try {
            this.conection = new MongoClient(uri);
            await this.conection.connect();
            this.db = this.conection.db(process.env.MONGO_NAME);
            if (!this.db) {
                throw new Error("No se pudo conectar a la base de datos.");
            }
        } catch (error) {
            console.error("Error en la URI o en la conexión:", error);
            throw error;
        }
    }
}