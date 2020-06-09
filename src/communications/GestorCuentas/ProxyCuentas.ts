/** ProxyCuentas.ts
 * Clase estatica que contiene todos
 * los metodos relacionados con
 * interacciones a la base de datos
 * relacionados con el gestor de cuentas
 */


import Usuario from '../../model/GestorCuentas/Usuario';
import MySQL from '../mysql';

export default class ProxyCuentas {
    public static agregarUsuarioBD(usuario: Usuario, callback: Function) {
        const query = `
            INSERT INTO usuarios SET ?;
        `;
        MySQL.instance.conn.query(query, usuario, (err, results: Object[], fields) => {
            if (err) {
                return callback(err);
            }
            if (results.length === 0) {
                return callback('El registro solicitado no existe');
            }
            callback(null, results);
        });
    }

    public static obtenerUsuarioBD(email: string, callback: Function) {
        const query = `
            SELECT * FROM usuarios 
            WHERE email = ?;
        `;
        MySQL.instance.conn.query(query, email, (err, results: Object[], fields) => {
            if (err) {
                return callback(err);
            }
            if (results.length === 0) {
                return callback('El usuario y/o contraseña es incorrecto/a');
            }
            callback(null, results);
        });
    }

    public static obtenerVeterinariosBD(callback: Function) {
        const query = `
            SELECT * FROM usuarios 
            WHERE rol = ?;
        `;
        MySQL.instance.conn.query(query, 'VET_ROLE', (err, results: Object[], fields) => {
            if (err) {
                return callback(err);
            }
            if (results.length === 0) {
                return callback('No hay veterinarios registrados');
            }
            callback(null, results);
        });
    }

}