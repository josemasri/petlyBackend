import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


import Usuario from './Usuario';
import ProxyCuentas from '../../communications/GestorCuentas/ProxyCuentas';
import { SEED } from '../../config/config';

export default class GestorCuentas {
    private static encriptarPassword(password: string): string {
        return bcrypt.hashSync(password, 10);
    }
    public static agregarUsuario(usuario: Usuario, callback: Function) {
        // Encriptando contraseña
        usuario.setPassword(this.encriptarPassword(usuario.getPassword()));
        ProxyCuentas.agregarUsuarioBD(usuario, (err: any, results: Object[]) => {
            if (err) {
                return callback(err);
            }
            return callback(null, 'Usuario agregado correctamente', results);
        });
    }

    public static loginUsuario(email: string, password: string, callback: Function) {
        ProxyCuentas.obtenerUsuarioBD(email, (err: any, results: any[]) => {
            if (err) {
                return callback(err, 'El usuario y/o contraseña es incorrecto/a');
            }
            const passwordEncriptada = results[0].password;
            // Verificar contraseña
            if(!bcrypt.compareSync(password, passwordEncriptada)) {
                return callback('El usuario y/o contraseña es incorrecto/a', 'El usuario y/o contraseña es incorrecto/a');
            }
            results[0].password = null;
            // Genrar token de usuario
            const token = jwt.sign(
                {
                  usuario: results[0]
                },
                SEED,
                { expiresIn: process.env.CADUCIDAD_TOKEN }
              );
            return callback(null, 'El usuario existe', token);
        });
    }


    public static obtenerVeterinarios(callback: Function) {
        ProxyCuentas.obtenerVeterinariosBD((err: any, results: any[]) => {
            if (err) {
                return callback(err, 'No hay veterinarios registrados');
            }
            results.forEach(veterinario => {
                veterinario.password = null;
            });
            console.log(results);
            return callback(null, 'El usuario existe', results);
        });
    }
}
