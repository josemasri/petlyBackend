/** ProxyDoncaiones.ts
 * Clase estatica que contiene todos
 * los metodos relacionados con
 * interacciones a la base de datos
 * relacionados con el gestor de doncaiones
 */


import MySQL from '../mysql';
import Donacion from '../../model/GestorDonaciones/Donacion';

export default class ProxyDonaciones {
    public static agregarDonacionBD(donacion: Donacion, callback: Function) {
        const query = `
            INSERT INTO donaciones SET ?;
        `;
        MySQL.instance.conn.query(query, donacion, (err, results: any) => {
            if (err) {
                return callback(err);
            }
            if (results.length === 0) {
                return callback('El registro solicitado no existe');
            }
            return callback(null, 'Donación agregada con éxito');
        });
    }

    public static obtenerDonacionesBD(callback: Function) {
        const query = `
            SELECT * FROM donaciones;
        `;
        MySQL.instance.conn.query(query, (err, results: any) => {
            if (err) {
                return callback(err);
            }
            if (results.length === 0) {
                return callback('El registro solicitado no existe');
            }
            return callback(null, results);
        });
    }
}