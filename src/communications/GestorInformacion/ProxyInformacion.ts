import MySQL from '../mysql';
import Noticia from '../../model/GestorInformacion/Noticia';
import Albergue from '../../model/GestorInformacion/Albergue';

export default class ProxyInformacion {

    public static agregarNoticiaBD(noticia: Noticia, callback: Function) {
        const query = `
            INSERT INTO noticias SET ?;
        `;

        MySQL.instance.conn.query(query, noticia, (err, results: Object[], fields) => {
            if (err) {
                console.log('Error en query');
                return callback(err);
            }
            if (results.length === 0) {
                return callback('El registro solicitado no existe');
            }
            callback(null, results);
        });
    }

    public static obtenerNoticiasBD(callback: Function) {
        const query = `
            SELECT * FROM noticias;
        `;

        MySQL.instance.conn.query(query, (err, results: Object[], fields) => {
            if (err) {
                console.log('Error en query');
                return callback(err);
            }
            if (results.length === 0) {
                return callback('El registro solicitado no existe');
            }
            callback(null, results);
        });
    }

    public static obtenerNoticiaBD(id: number, callback: Function) {
        const query = `
            SELECT * FROM noticias
            WHERE id = ?;
        `;

        MySQL.instance.conn.query(query, id, (err, results: Object[], fields) => {
            if (err) {
                console.log('Error en query');
                return callback(err);
            }
            if (results.length === 0) {
                return callback('La noticia solicitada no existe');
            }
            callback(null, results);
        });
    }


    public static agregarAlbergueBD(albergue: Albergue, callback: Function) {
        const query = `
            INSERT INTO albergues SET ?;
        `;

        MySQL.instance.conn.query(query, albergue, (err, results: Object[], fields) => {
            if (err) {
                console.log('Error en query');
                return callback(err);
            }
            if (results.length === 0) {
                return callback('El registro solicitado no existe');
            }
            callback(null, results);
        });
    }

    public static obtenerAlberguesBD(callback: Function) {
        const query = `
            SELECT * FROM albergues;
        `;

        MySQL.instance.conn.query(query, (err, results: Object[], fields) => {
            if (err) {
                console.log('Error en query');
                return callback(err);
            }
            if (results.length === 0) {
                return callback('El registro solicitado no existe');
            }
            callback(null, results);
        });
    }
}