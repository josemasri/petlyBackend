import Donacion from './Donacion';
import ProxyDonaciones from '../../communications/GestorDonaciones/ProxyDonaciones';
export default class GestorDonaciones {
    public static agregarDonacion(donacion: Donacion, callback: Function) {
        ProxyDonaciones.agregarDonacionBD(donacion, (err: any, message: any) => {
            if (err) {
                return callback(err);
            }
            return callback(null, message);
        });
    }

    public static obtenerDonaciones(callback: Function) {
        ProxyDonaciones.obtenerDonacionesBD((err: any, donaciones: any) => {
            if (err) {
                return callback(err);
            }
            return callback(null, donaciones);
        });
    }
}
