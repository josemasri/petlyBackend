
import Noticia from './Noticia';
import ProxyInformacion from '../../communications/GestorInformacion/ProxyInformacion';
import Albergue from './Albergue';

export default class GestorInformacion {
    public static agregarNoticia(noticia: Noticia, callback: Function) {
        ProxyInformacion.agregarNoticiaBD(noticia, (err: any, results: Object[]) => {
            if (err) {
                return callback(err);
            }
            return callback(null, 'Noticia agregada con éxito', results);
        });
    }

    public static obtenerNoticias(callback: Function) {
        ProxyInformacion.obtenerNoticiasBD((err: any, results: Object[]) => {
            if (err) {
                return callback(err);
            }
            return callback(null, 'Noticias consultadas con éxito', results);
        });
    }

    public static obtenerNoticia(id: number, callback: Function) {
        ProxyInformacion.obtenerNoticiaBD(id, (err: any, results: Object[]) => {
            if (err) {
                return callback(err);
            }
            return callback(null, 'Noticia consultada con éxito', results);
        });
    }

    public static eliminarNoticia() {

    }

    public static modificarNoticia() {

    }

    public static agregarAlbergue(albergue: Albergue, callback: Function) {
        ProxyInformacion.agregarAlbergueBD(albergue, (err: any, results: Object[]) => {
            if (err) {
                return callback(err);
            }
            return callback(null, 'Albergue agregado con éxito', results);
        });
    }

    public static obtenerAlbergues(callback: Function) {
        ProxyInformacion.obtenerAlberguesBD( (err: any, results: Object[]) => {
            if (err) {
                return callback(err);
            }
            return callback(null, 'Albergues consultados con éxito', results);
        });
    }
}