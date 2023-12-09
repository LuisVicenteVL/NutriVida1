const { connectMysql } = require('../dbconnection');
class ConsultasModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('Consultas');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Consultas').where('id_consulta', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('Consultas').insert(datos).returning('id_consulta');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('Consultas').where('id_consulta', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_consulta'] = id;
        await db('Consultas').where('id_consulta', id).del();
        await db.insert(newData).into('Consultas');
        return id;
    }
}

module.exports = ConsultasModel;