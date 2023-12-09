const { connectMysql } = require('../dbconnection');
class PacientesModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('Pacientes');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Pacientes').where('id_paciente', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('Pacientes').insert(datos).returning('id_paciente');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('Pacientes').where('id_paciente', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_paciente'] = id;
        await db('Pacientes').where('id_paciente', id).del();
        await db.insert(newData).into('Pacientes');
        return id;
    }
}

module.exports = PacientesModel;