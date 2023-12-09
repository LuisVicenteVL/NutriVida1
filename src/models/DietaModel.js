const { connectMysql } = require('../dbconnection');
class DietaModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('Dieta');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Dieta').where('id_dieta', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('Dieta').insert(datos).returning('id_dieta');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('Dieta').where('id_dieta', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_dieta'] = id;
        await db('Dieta').where('id_dieta', id).del();
        await db.insert(newData).into('Dieta');
        return id;
    }
}

module.exports = DietaModel;