/** GestorAnimales.ts 
 * Clase estatica que contiene todos 
 * los atributos 
 * y métodos correspondientes
 * a las funcionalidades
 *  del gestor de animales 
 */
import QRCode from 'qrcode';
import fs from 'fs';
import ProxyAnimales from '../../communications/GestorAnimales/ProxyAnimales';
import Animal from './Animal';
import GestorInformacion from '../GestorInformacion/GestorInformacion';
import fileUpload from 'express-fileupload';
import path from 'path';

export default class GestorAnimales {
    public static agregarPerro(perro: Animal, img: fileUpload.UploadedFile, callback: Function) {
        ProxyAnimales.agregarPerroBD(perro, (err: any, idAnimal: number, results: any) => {
            if (err) {
                return callback(err);
            }
            // Agregar imagen al servidor
            GestorInformacion.agregarImagen(img, idAnimal, 'animal', (err2: any, ext: string) => {
                if (err2) {
                    return callback(err2);
                }
                // Actualizar nombre de la imágen en la BD
                ProxyAnimales.actualizarPerroBD(`${idAnimal}.${ext}`, idAnimal, (err3: any, results3: any) => {
                    if (err3) {
                        return callback(err3);
                    }
                    // Generar código QR
                    this.generarCodigoQRAnimal(`${idAnimal}`, 'perro', (err4: any, results4: any) => {
                        if (err4) {
                            return callback(err4);
                        }
                        return callback(null, results4);
                    });
                });
            });
        });
    }


    public static obtenerPerros(callback: Function) {
        ProxyAnimales.obtenerPerrosBD((err: any, perros: any) => {
            if (err) {
                return callback(err);
            }
            return callback(null, perros);
        });
    }


    public static obtenerPerro(id: string | number, callback: Function) {
        ProxyAnimales.obtenerPerroBD(id, (err: any, perro: any) => {
            if (err) {
                return callback(err);
            }
            return callback(null, perro);
        });
    }


    private static generarCodigoQRAnimal(id: number | string, tipo: string, callback: Function) {
        QRCode.toDataURL(`${id}.${tipo}`, function (err, url) {
            if (err) {
                return callback(err);
            }
            const qrPath = path.resolve(__dirname, '..', '..', 'public', 'qr');
            if (!fs.existsSync(qrPath)) {
                fs.mkdirSync(qrPath);
            }
            fs.writeFileSync(`${qrPath}/${id}.png`, url.split(',')[1], 'base64');
            return callback(null, true);
        })
    }
}