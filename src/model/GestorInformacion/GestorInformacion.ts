
import Noticia from './Noticia';
import ProxyInformacion from '../../communications/GestorInformacion/ProxyInformacion';
import Albergue from './Albergue';
import fileUpload from 'express-fileupload';
import path from 'path';
import fs from 'fs';

export default class GestorInformacion {
    public static agregarNoticia(noticia: Noticia, imagen: fileUpload.UploadedFile, callback: Function) {
        ProxyInformacion.agregarNoticiaBD(noticia, (err: any, results: any) => {
            if (err) {
                return callback(err);
            }
            const id = Number(results.insertId);
            this.agregarImagen(imagen, id, 'noticias', (err2: any, ext: string) => {
                ProxyInformacion.actualizarImagenBD(id, ext, 'noticias', (err: any, results: any) => {
                    if (err) {
                        return callback(err);
                    }
                    return callback(null, 'Noticia agregada con éxito', results);
                });
            });
        });
    }

    public static obtenerNoticias(page: number, callback: Function) {
        ProxyInformacion.obtenerNoticiasBD(page, (err: any, results: Object[]) => {
            if (err) {
                return callback(err);
            }
            return callback(null, 'Noticias consultadas con éxito', results);
        });
    }

    public static eliminarNoticia() {

    }

    public static modificarNoticia() {

    }

    public static agregarAlbergue(albergue: Albergue, imagen: fileUpload.UploadedFile, callback: Function) {
        ProxyInformacion.agregarAlbergueBD(albergue, (err: any, results: any) => {
            if (err) {
                return callback(err);
            }
            // Id del albergue
            const id = Number(results.insertId);
            this.agregarImagen(imagen, id, 'albergues', (err2: any, ext: string) => {
                if (err2) {
                    return callback(err2);
                }
                ProxyInformacion.actualizarImagenBD(id, ext, 'albergues', (err3: any, results: any) => {
                    if (err3) {
                        return callback(err3);
                    }
                    return callback(null, 'Albergue agregado con éxito', results);
                });
            });
        });
    }

    public static obtenerAlbergues(callback: Function) {
        ProxyInformacion.obtenerAlberguesBD((err: any, results: Object[]) => {
            if (err) {
                return callback(err);
            }
            return callback(null, 'Albergues consultados con éxito', results);
        });
    }


    public static agregarImagenGaleria(titulo: string, imagen: fileUpload.UploadedFile, idAutor: number, callback: Function) {
        // Agregar imagen a la base de datos
        ProxyInformacion.agregarImagenGaleriaBD(titulo, idAutor, (err: any, results: any) => {
            if (err) {
                return callback(err);
            }
            const id = Number(results.insertId);
            this.agregarImagen(imagen, id, 'galeriaImagenes', (err2: any, ext: string) => {
                if (err2) {
                    return callback(err2);
                }
                ProxyInformacion.actualizarImagenBD(id, ext, 'galeriaImagenes', (err3: any, results: any) => {
                    if (err3) {
                        return callback(err3);
                    }
                    return callback(null, 'Imagén agregada con éxito', results);
                });
            });
        });
    }

    // =====================
    // obtenerGaleria
    // =====================
    public static obtenerGaleria(page: number, limit: number, callback: Function) {
        // Obtener Galería de BD
        ProxyInformacion.obtenerGaleriaBD(page, limit, (err: any, results: any) => {
            if (err) {
                return callback(err);
            }
            return callback(null, 'Galería mostrada con éxito', results);
        });
    }



    // =============================
    // Agregar imagen al servidor
    // =============================

    public static agregarImagen(imagen: fileUpload.UploadedFile, id: number, type: string, callback: Function) {
        // Obtener la extención de la imagen
        const imagenArray = imagen.name.split('.');
        const ext = imagenArray[imagenArray.length - 1].toLowerCase();
        const validExt = ['jpg', 'png', 'jpeg', 'bmp'];
        const imageType = type;
        if (!validExt.includes(ext)) {
            return callback('Error, tipo de archivo no valido');
        }
        const imageDir = path.resolve(`${__dirname}/../../public/img/`);
        // Crear el directorio si no existe
        if (!fs.existsSync(imageDir)) {
            fs.mkdirSync(imageDir);
            fs.mkdirSync(imageDir + `/${imageType}`);
        }
        if (!fs.existsSync(imageDir + `/${imageType}`)) {
            fs.mkdirSync(imageDir + `/${imageType}`);
        }
        const imageName = `${imageDir}/${imageType}/${id}.${ext}`;
        imagen.mv(imageName, (err: any) => {
            if (err) {
                callback(err);
            }
            return callback(null, ext);
        });
    }

    // ==========================
    //  Obtener mensaje de respuesta
    // ==========================
    public static obtenerResMensaje(message: string, callback: Function) {
        let resMessage = '';
        message = message.toLowerCase();
        switch (true) {
            case /\b(\w*hola\w*)\b/.test(message):
                resMessage = 'Hola, excelente día, envie una consulta y le responderemos enseguida';
                break;
            case /\b(\w*horario\w*)\b/.test(message):
                resMessage = 'Nuestros horarios de atención son de 8 a.m a 6 p.m de lunes a viernes';
                break;
            case /\b(\w*sucursal\w*)\b/.test(message):
                resMessage = 'Actualmente contamos con sucursales en la zona Sur, Este, Oeste y Norte de la CDMX';
                break;
            default:
                resMessage = 'La respuesta no se encuentra implementada, contactenos al 01 800 petly';
                break;
        }
        return callback(null, resMessage);
    }
}