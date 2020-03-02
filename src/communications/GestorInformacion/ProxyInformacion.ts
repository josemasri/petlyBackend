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

    public static actualizarImagenBD(id: number, ext: string, table: string, callback: Function) {
        const query = `
            UPDATE ?? SET img = ? WHERE id = ?;
        `;

        const img = `${id}.${ext}`;

        MySQL.instance.conn.query(query, [table, img, id], (err, results: Object[], fields) => {
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

    public static obtenerNoticiasBD(page: number, callback: Function) {
        const fromRegister = page * 3;
        console.log(fromRegister);
        const query = `
            SELECT * FROM noticias 
            LIMIT ?,3;
        `;

        MySQL.instance.conn.query(query, fromRegister, (err, results: Object[], fields) => {
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

    // =====================
    //  Galería
    // =====================
    public static agregarImagenGaleriaBD(titulo: string, idAutor: number, callback: Function) {
        const query = `
            INSERT INTO galeriaImagenes SET titulo = ?, autor = ?;
        `;
        MySQL.instance.conn.query(query, [titulo, idAutor], (err, results: Object[], fields) => {
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


    public static obtenerGaleriaBD(page: number, limit: number, callback: Function) {
        const fromRegister = page * limit;
        
        const query = `
            SELECT g.*, u.nombre, u.apellidoPaterno 
            FROM galeriaImagenes g INNER JOIN usuarios u ON g.autor = u.id
            LIMIT ?,?;
        `;

        MySQL.instance.conn.query(query, [fromRegister, limit], (err, results: Object[], fields) => {
            if (err) {
                console.log('Error en query');
                return callback(err);
            }
            if (results.length === 0) {
                return callback('No hay imágenes en la galería');
            }
            callback(null, results);
        });
    }
}