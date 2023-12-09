const { connectMysql } = require('../dbconnection');
class HistorialMedicoModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('HistorialMedico');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('HistorialMedico').where('id_historial', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('HistorialMedico').insert(datos).returning('id_historial');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('HistorialMedico').where('id_historial', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_historial'] = id;
        await db('HistorialMedico').where('id_historial', id).del();
        await db.insert(newData).into('HistorialMedico');
        return id;
    }
}

module.exports = HistorialMedicoModel;