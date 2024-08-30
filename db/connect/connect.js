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
        const uri = `${process.env.MONGO_PROTOCOLO}${process.env.MONGO_USER}:${process.env.MONGO_PSW}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}`;
        try {
            this.conection = new MongoClient(uri);
            await this.conection.connect();
            this.db = this.conection.db(process.env.MONGO_DB_NAME)
        } catch (error) {
            this.conection = { status: 400, message: "Error en la URI o en la conexion" }
        }
    }
    destructor(){
        connect.instanceConnect = undefined;
    }
}