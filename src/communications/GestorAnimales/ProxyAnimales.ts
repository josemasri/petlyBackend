/** ProxyAnimales.ts
 * Clase estatica que contiene todos
 * los metodos relacionados con
 * interacciones a la base de datos
 * relacionados con el gestor de animales
 */

import MySQL from '../mysql';

export default class ProxyAnimales {
    public static agregarPerroBD(perro: any, callback: Function) {
        // Agregando Animal
        const animal = {
            nombre: perro.$nombre,
            estructuraVertebral: perro.$estructuraVertebral,
            tipoReproduccion: perro.$tipoReproduccion,
            medioDeVida: perro.$medioDeVida,
            habitosNaturales: perro.$habitosNaturales,
            excresion: perro.$excresion,
            sexo: perro.$sexo,
            dieta: perro.$dieta,
            edad: perro.$edad,
            img: perro.$img
        };
        const query = `
            INSERT INTO animales SET ?;
        `;
        MySQL.instance.conn.query(query, animal, (err, results: any, fields) => {
            if (err) {
                return callback(err);
            }
            if (results.length === 0) {
                return callback('El registro solicitado no existe');
            }
            const idAnimal = results.insertId;
            const perroAux = {
                idAnimal,
                raza: perro.raza,
                tamano: perro.tamano
            }
            const query2 = `
            INSERT INTO perros SET ?;
            `;
            MySQL.instance.conn.query(query2, perroAux, (err2: any, results2: any) => {
                if (err2) {
                    return callback(err2);
                }
                if (results2.length === 0) {
                    return callback('El registro solicitado no existe');
                }
                // El perro se agrego 
                return callback(null, idAnimal, results2);
            });
        });
    }

    public static actualizarPerroBD(img: string, idAnimal: number, callback: Function) {
        const query = `
            UPDATE animales SET ?
            WHERE ID = ?;
        `;
        MySQL.instance.conn.query(query, [{img}, idAnimal], (err: any, results: any) => {
            if (err) {
                return callback(err);
            }
            if (results.length === 0) {
                return callback('El registro solicitado no existe');
            }
            // El perro se agrego 
            return callback(null, results);
        });
    }

    public static obtenerPerrosBD(callback: Function) {
        const query = `
            SELECT * FROM perros 
            JOIN animales ON perros.idAnimal = animales.id;
        `;
        MySQL.instance.conn.query(query, (err, results: Object[], fields) => {
            if (err) {
                return callback(err);
            }
            if (results.length === 0) {
                return callback('No hay perros disponibles');
            }
            return callback(null, results);
        });
    }


    public static obtenerPerroBD(id: string | number, callback: Function) {
        const query = `
            SELECT * FROM perros 
            JOIN animales ON perros.idAnimal = animales.id
            WHERE perros.idAnimal = ?;
        `;
        MySQL.instance.conn.query(query, id, (err, results: Object[], fields) => {
            if (err) {
                return callback(err);
            }
            if (results.length === 0) {
                return callback('No hay perros disponibles');
            }
            callback(null, results[0]);
        });
    }
}